const { Router } = require('express');
const {publish} = require('../utils/jwt')
const userService = require('../service/userService');
const route = Router()

// 登陆
route.post('/login', async (req, res) => {
  const r = await userService.login(req.body);
  if (!!r) {
    let value = r.id;
    //登录成功
     publish(res, undefined, { id: value });
  }
  res.send(r)
})
// 注册
route.post('/sign', async (req, res) => {
  const r = await userService.sign(req.body);
  res.send(r)
})
// 获取当前用户的信息
route.get('/whoami', async (req, res) => {
  const r = await userService.whoami(req.userId);
  res.send(r)
})
module.exports  = route;