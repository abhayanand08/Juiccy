const express = require('express')
const path = require('path')
const router = express.Router()
const User = require('../model/user')
const multer = require('multer')
const catcherror = require('../middelware/catcherror')
const fs = require('fs')
const jwt = require('jsonwebtoken');
const sendMail = require('../utils/activationmail');
const sendToken = require('../utils/jwtToken');
const Errorhandler = require('../utils/Errorhandler');
const isAuthenticated = require('../middelware/auth')



const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(__dirname, '../images-user'));
    },
    filename: function(req,file,cb){
        const ext = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const name = file.originalname.split(".")[0];
        cb(null,name + "-" + ext + ".png");
    },
});

const upload = multer({storage: storage});




router.post("/create-user", upload.single('avatar'),async (req, res, next) =>{
    
    const { name, email, password } = req.body;
    const useremail = await User.findOne({email});

    if(useremail){

        const imgname = req.file.filename
        const imgpath = `images-user/${imgname}`
        fs.unlink(imgpath, (err) => {
            if(err){
                console.log(err)
                res.status(500).json({message: "Error on deleting file"})
            }else{
                res.json({message: 'File deleted successfully'})
            }
        });

        return next(new Errorhandler("User already exists", 400));
    }

    const imagename = req.file.filename;
    const fileUrl = path.join(imagename);

    const user = {
      name: name,
      email: email,
      password: password,
      avatar: fileUrl,
    };

    const newUser = await User.create(user);
    res.status(201).json({
        success: true,
        newUser,
    });

    const activeToken = createActiveToken(user);

    const activationurl = `http://localhost:3000/activation/${activeToken}`

    try {
        
        await sendMail({
            email: user.email,
            subject: 'Activation of your account',
            message: `Hello ${user.name}, Kindly click on the link to activate your account: ${activationurl}`,
        })
        res.status(201).json({
            success: true,
            message: 'Please check your email to activate your account'
        })

    } catch (error) {
        return next(new Errorhandler(error.message, 500))
    }

})



const createActiveToken = (user) =>{
    return jwt.sign(user, process.env.ACTIVE_TOKEN,{
        expiresIn: '5m',
    })
}

router.post('/activation', catcherror(async(req,res,next) =>{
    try {
        const {activation_token} = req.body;
        const newUser = jwt.verify(activation_token, process.env.ACTIVE_TOKEN);

        if(!newUser){
            return next(new Errorhandler('Invalid Token',400));
        }
        const {name, email, password, avatar} = newUser;
         
        let user = await User.findOne({ email });

        if (user) {
        return next(new Errorhandler("User already exists", 400));
        }
            user = await User.create({
              name,
              email,
              password,
              avatar,
            });

            sendToken(user, 201, res);

    } catch (error) {
        
    }
}));

router.post('/login-user', catcherror(async(req,res,next) => {
    try {
        const {email, password} = req.body

        if(!email || !password){
            return next(new Errorhandler('Please provide all the fields!', 400));
        }

        const user= await User.findOne({email}).select('+password');

        if(!user){
            return next(new Errorhandler("User dosen't exists!", 400));
        }

        const isPasswordValid = await user.comparePassword(password);

        if(!isPasswordValid){
            return next(new Errorhandler("Please provide all the correct details", 400));
        }

        sendToken(user, 201, res);

    } catch (error) {
        return next(new Errorhandler(error.message, 500));
    }
}));

router.get('/getuser', isAuthenticated ,catcherror(async (req, res, next) => {
      try {
        const user = await User.findById(req.user.id);
  
        if (!user) {
          return next(new Errorhandler("User doesn't exists", 400));
        }
  
        res.status(200).json({
          success: true,
          user,
        });
      } catch (error) {
        return next(new Errorhandler(error.message, 500));
      }
    })
  );

  router.get(
    "/logout",
    catcherror(async (req, res, next) => {
      try {
        res.cookie("token", null, {
          expires: new Date(Date.now()),
          httpOnly: true,
        });
        res.status(201).json({
          success: true,
          message: "Log out successful!",
        });
      } catch (error) {
        return next(new Errorhandler(error.message, 500));
      }
    })
  );

module.exports = router;