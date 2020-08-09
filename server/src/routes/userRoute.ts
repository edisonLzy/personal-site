import {Router} from 'express';
import  Service from '../service/userService';
const route = Router()

// 登陆
route.post('/login',async (req,res)=>{
  const r = Service.login();
  res.send()
})
// 注册
route.post('/sign',(req,res)=>{
    const body = req.body;
    const r = Service.sign(body);
    res.send() 
})
export default route