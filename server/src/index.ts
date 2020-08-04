import express from 'express';
import ora from 'ora';
import path from 'path';
import config from './config.json';
import { isDev } from './utils';
import initDatabase from './models'

//  初始化数据库 和 sequelize
initDatabase();
const app = express();
const pro = ora(`serve is staring....`);
pro.start()

// 指定静态文件目录 
if (!isDev()) {
    app.use(express.static('./public'))
}

app.listen(config.port, function () {
    pro.succeed(`🚀 Server listening on ${config.host}:${config.port}`)
})