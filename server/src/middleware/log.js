const {apiLogger} = require('../logger')
module.exports = function(req,res,next){
  apiLogger.debug(req.originalUrl)
  next()
}