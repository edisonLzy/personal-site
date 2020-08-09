const userRoute  = require('./userRoute');
module.exports  = function(app,version){
    app.use(`${version}/user`,userRoute)
}