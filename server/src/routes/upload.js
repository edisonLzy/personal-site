const { Router } = require('express');
const route = Router()
const multer = require("multer");
const path = require("path");
const uploadConfig = require("../config/upload.json")
const serverConfig = require("../config/server.json")
const {getRandomStr} = require("../utils");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "../../public/files/img"));
    },
    filename: function (req, file, cb) {
      // 时间戳-6位随机字符.文件后缀
      const timeStamp = Date.now();
      const ramdomStr = getRandomStr();
      const ext = path.extname(file.originalname);
      const filename = `${timeStamp}-${ramdomStr}${ext}`;
      cb(null, filename);
    },
});

const upload = multer({
    storage,
    limits: {
      fileSize: 150 * 1024,
    },
    fileFilter(req, file, cb) {
      //验证文件后缀名
      const extname = path.extname(file.originalname);
      const whitelist = uploadConfig.fileType;
      if (whitelist.includes(extname)) {
        cb(null, true);
      } else {
        cb(new Error(`your ext name of ${extname} is not support`));
      }
    },
  });

// 登陆
route.post('/',upload.single("file"), async (req, res) => {
    const url = `http://localhost:${serverConfig.port}/${uploadConfig.viewImg}/${req.file.filename}`
    res.send({
        code: 1,
        msg: "success",
        data: url
    });
})
module.exports  = route;