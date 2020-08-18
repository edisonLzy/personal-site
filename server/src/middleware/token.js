const pathtoRegexp = require("path-to-regexp");
const { getErr } = require("../utils/getSendResult");
const jwt = require("../utils/jwt");
const serverConfig = require("../config/server.json");
// 需要token的接口
const needTokenApi = [
  { method: "POST", path: `${serverConfig.version}/user` },
  { method: "GET", path: `${serverConfig.version}/user/whoami` },
  { method: "POST", path: `${serverConfig.version}/article/add` },
  { method: "PUT", path: `${serverConfig.version}/article` },
  { method: "DELETE", path: `${serverConfig.version}/article/:id` },
  // { method: "POST", path: `${serverConfig.version}/comment/add` },
  { method: "DELETE", path: `${serverConfig.version}/comment/:id` },
];

// 用于解析token
module.exports = (req, res, next) => { 
  const apis = needTokenApi.filter((api) => {
    const reg = pathtoRegexp(api.path);
    return api.method === req.method && reg.test(req.path);
  });
  if (apis.length === 0) {
    next();
    return;
  }
  const result = jwt.verify(req);
  if (result) {
    //认证通过 所有具有权限的用户的所有请求 req对象中都会有一个userId字段
    req.userId = result.id;
    next();
  } else {
    //认证失败
    handleNonToken(req, res, next);
  }
};

//处理没有认证的情况
function handleNonToken(req, res, next) {
  res
    .status(403)
    .send(getErr("you dont have any token to access the api", 403));
}
