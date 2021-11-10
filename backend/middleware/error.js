
const ErrorHandler = require('../Util/ErrorHandler');

module.exports = (err, req, res,  next) => {

    //handle cast error  when wrong mongodb id is caught
    if (err.name === 'CastError') {
        const message = "resource not found";
        err =  new ErrorHandler(400,message);
    }


    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Something went wrong';

    res.status(err.statusCode).json({
        status: false,
        error: err
    });

}

