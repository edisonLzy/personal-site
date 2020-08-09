const { Router } = require('express');
const userService = require('../service/userService');
const route = Router()

// 登陆
route.post('/login', async (req, res) => {
  const r = userService.login();
  res.send()
})
// 注册
route.post('/sign', async (req, res) => {
  const body = req.body;
  const r = await userService.sign(body);
  console.log(r)
  res.send(r)
})
module.exports  = route;