const Router = require('koa-router')
const router = Router();

const home = require('./home')
const user = require('./user')
const article = require('./article')



router.use('', home.routes(), home.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())
router.use('/article', article.routes(), article.allowedMethods())


// // 上传文件工具
// const { uploadFile } = require('./util/upload')

// // 上传文件的请求处理
// router.post('/api/picture/upload.json', async(ctx, next) => {
//     // 上传文件请求处理
//     let result = { success: false }
//     let serverFilePath = path.join(__dirname, 'static/image')

//     // 上传文件事件
//     result = await uploadFile(ctx, {
//         fileType: 'album',
//         path: serverFilePath
//     })
//     ctx.body = result
// })

module.exports = router