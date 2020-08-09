import express from 'express';
import cors from 'cors'
import ora from 'ora';
import path from 'path';
import config from './config/server.json';
import { isDev } from './utils';
import initDatabase from './models';
import initRoute from './routes'
//  初始化数据库 和 sequelize
initDatabase();
// TEst
import './test/userTest'
const app = express();
const pro = ora(`serve is staring....`);
pro.start()

// 指定静态文件目录 
if (!isDev()) {
    app.use(express.static('./public'))
}
// 添加处理请求参数的中间件
app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());
// 添加处理跨域的中间件
app.use(cors())

// 初始化路由配置
initRoute(app,config.version)
app.listen(config.port, function () {
    pro.succeed(`🚀 Server listening on ${config.host}:${config.port}`)
})