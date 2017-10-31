const Router = require('koa-router')

var articleCtrl = require('../controller/articleCtrl')

// 文章
let article = new Router()

article.get("/add", articleCtrl.add)
    // 写文章的接口
article.post("/addArticleOn", articleCtrl.addArticleOn)
    // 上传文件
article.post("/api/upload", articleCtrl.picUpload)

module.exports = article;