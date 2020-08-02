const express = require('express');
const ora = require('ora');
const path = require('path');
const app = express();
const config = require('./config.json')
const {isDev} = require('./utils')

const process = ora(`serve is staring....`);
process.start()

// 指定静态文件目录 
if(!isDev()){
    app.use(express.static('./public'))
}

app.listen(config.port, function () {
    process.succeed(`🚀 Server listening on ${config.host}:${config.port}`)
})