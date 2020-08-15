const { Router } = require('express');
const commentService = require('../service/commentService');
const route = Router()

// 新增评论
route.post('/add', async (req, res) => {
    const r = await commentService.add(req.body,req);
    res.send(r)
})
// 点赞评论
route.put('/like', async (req, res) => {
    const r = await commentService.likes(req.body);
    res.send(r)
})
// 删除评论
route.delete('/:id',async (req,res) =>{
    const r = await commentService.delete(req.params);
    res.send(r)
})
route.get('/',async (req,res)=>{
    const r = await commentService.list(req.query);
    res.send(r)
})
module.exports = route;