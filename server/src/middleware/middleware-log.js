const { models } = require("../models/db");

const {apiLogger} = require('../logger')
module.exports = function(req,res,next){
  apiLogger.debug(req.header)
  next()
}