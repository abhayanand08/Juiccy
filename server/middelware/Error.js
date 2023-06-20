const Errorhandler = require('../utils/Errorhandler')

module.exports = (err,req,res,next) => {
    err.statuscode = err.statuscode || 500
    err.message = err.message || 'Server Issues'


    if(err.name === 'casterror'){
        const message = `No record with this id! Invalid ${err.path}`
        err = new Errorhandler(message,400)
    }

    if(err.code === 11000){
        const message = `Duplicated key ${Object.keys(err.keyValue)} Entered`
        err = new Errorhandler(message, 400)
    }

    if(err.name === "JsonWebTokenError"){
        const message = 'Invalid URL'
        err = new Errorhandler(message,400)
    }
cd
    if (err.name === "TokenExpiredError") {
        const message = 'URL Expired';
        err = new Errorhandler(message, 400);
      }

    res.status(err,statuscode).json({
        success: false,
        message: err.message,
    });
};
