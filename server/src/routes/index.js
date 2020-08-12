const userRoute  = require('./userRoute');
const uploadRoute = require('./upload');
module.exports  = function(app,version){
    app.use(`${version}/user`,userRoute)
    app.use(`${version}/upload`,uploadRoute)
}