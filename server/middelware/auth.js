const ErrorHandler = require('../utils/Errorhandler')
const jwt = require('jsonwebtoken')
const catcherror = require('./catcherror')
const User = require('../model/user')


const isAuthenticated = catcherror(async(req,res,next) => {
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);

    next();
});

module.exports = isAuthenticated;
