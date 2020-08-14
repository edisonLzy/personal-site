const userRoute  = require('./userRoute');
const uploadRoute = require('./uploadRoute');
const articleRoute = require('./articleRoute');
const commnetRoute = require('./commentRoute');
module.exports  = function(app,version){
    app.use(`${version}/user`,userRoute)
    app.use(`${version}/upload`,uploadRoute)
    app.use(`${version}/article`,articleRoute)
    app.use(`${version}/comment`,commnetRoute)
}