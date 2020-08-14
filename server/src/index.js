const express = require('express');
const cors = require('cors')
const ora = require('ora');
const path = require('path');
const config = require('./config/server.json');
const init = require('./init');
const app = express();
const pro = ora(`serve is staring....`);
pro.start()
// 指定静态文件目录 
const staticRoot = path.resolve(__dirname, "../public");
app.use(express.static(staticRoot));

// 加入cookie-parser 中间件
// 加入之后，会在req对象中注入cookies属性，用于获取所有请求传递过来的cookie
// 加入之后，会在res对象中注入cookie方法，用于设置cookie
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// 应用token中间件
app.use(require("./middleware/token"));

// 添加处理请求参数的中间件
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// 添加处理跨域的中间件
app.use(cors())
// 初始化 数据库 和 路由
init(app, config)

// 处理错误的中间件
app.use(require("./middleware/error"));

app.listen(config.port, function () {
    pro.succeed(`🚀 Server listening on ${config.host}:${config.port}`)
})