const { Router } = require('express');
const {publish} = require('../utils/jwt')
const userService = require('../service/userService');
const route = Router()

// 登陆
route.post('/login', async (req, res) => {
  const result = await userService.login(req.body);
  if (!!result) {
    let value = result.id;
    //登录成功
     publish(res, undefined, { id: value });
  }
  res.send(result)
})
// 注册
route.post('/sign', async (req, res) => {
  const r = await userService.sign(req.body);
  res.send(r)
})
module.exports  = route;