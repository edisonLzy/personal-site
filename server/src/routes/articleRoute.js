const { Router } = require('express');
const articleService = require('../service/articleService');
const route = Router()

// 获取文章 列表
route.get('/', async (req, res) => {
 const r = await articleService.list(req.query);
 res.send(r)
})
// 点赞
route.put('/like',async (req,res)=>{
   const r = await articleService.likes(req.body);
   res.send(r)
})
// 获取某个文章的详情
route.get('/detail/:id', async (req, res) => {
 const r = await articleService.detail(req.params);
 res.send(r)
})
// 新增文章
route.post('/add', async (req, res) => {
   const r = await  articleService.add(req.body,req);
   res.send(r)
})
// 修改文章
route.put('/',async (req,res)=>{
   const r = await  articleService.update(req.body);
   res.send(r)
})
// 删除文章
route.delete('/:id',async (req,res)=>{
   const r = await articleService.delete(req.params)
   res.send(r)
})
module.exports  = route;