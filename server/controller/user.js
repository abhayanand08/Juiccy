const express = require('express')
const path = require('path')
const router = express.Router()
const ErrorHandler = require('../utils/Errorhandler');
const User = require('../model/user')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(__dirname, '../images-user'));
    },
    filename: function(req,file,cb){
        // const ext = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const name = Date.now() + "-" +file.originalname;
        cb(null,name);
    },
});

const upload = multer({storage: storage});

router.post("/create-user", upload.single('avatar'),async (req, res, next) =>{
    
    const { name, email, password } = req.body;
    const useremail = await User.findOne({email});

    if(useremail){
        return next(new ErrorHandler("User already exists", 400));
    }

    const imagename = req.file.filename;
    const fileUrl = path.join(imagename);

    const user = {
      name: name,
      email: email,
      password: password,
    };

    console.log(user); 

})

module.exports = router;