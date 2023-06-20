// const path = require('path')
// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: function(req,file,cb){
//         cb(null,path.join(__dirname, '../uploads'));
//     },
//     filename: function(req,file,cb){
//         // const ext = Date.now() + "-" + Math.round(Math.random() * 1e9);
//         const name = Date.now() + "-" +file.originalname;
//         cb(null,name);
//     },
// });

// const upload = multer({storage: storage});

// module.exports = upload