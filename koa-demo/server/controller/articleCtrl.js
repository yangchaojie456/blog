var articleSer = require('../services/articleSer')
const path = require('path')
const { uploadFile } = require('../../util/upload')
    // 文章
module.exports = {

    async add(ctx) {
        await ctx.render('article', {

        })
    },
    // 写文章的接口
    async addArticleOn(ctx) {

        let formData = ctx.request.body

        let result = await articleSer.writeArticle(formData)

        ctx.body = result;
    },

    async picUpload(ctx) {

        // 上传文件请求处理
        let serverFilePath = path.join(__dirname, '../../static/images')
        console.log(serverFilePath)

        // 上传文件事件
        let res = await uploadFile(ctx, {
            fileType: 'upload',
            path: serverFilePath
        })
        ctx.body = res
    }

}