import User from "../model/user";
import ErrorHandler from "../utils/Errorhandler";
import jwt from "jsonwebtoken";
import catcherror from "./catcherror";


exports.isAuthenticated = catcherror(async(req,res,next) => {
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);

    next();
});
