module.exports = func => (req, res, next) =>{


    //try and catch
    Promise.resolve(func(req, res,next)).catch(next);

};