const ora = require('ora');
function initModel(){
    const p = ora('🔧 正在初始化模型。。。');
    require("./models");
    p.succeed('🚀 模型初始化完成')
}
function initRoute(app,config){
    const p = ora('🔧 正在初始化路由。。。');
    const initRoute = require('./routes');
    initRoute(app,config.version)
    p.succeed('🚀 路由初始化完成')
}
function initMiddleware(app){
  app.use(require('./middleware/middleware-log'))
}
module.exports = function(app,config){
 // 初始化模型 
 initModel()
 // 初始化自定义中间件
 initMiddleware(app)
 // 初始化路由
 initRoute(app,config)
}