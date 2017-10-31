const path = require('path')
const Koa = require('koa')

// 加载模板引擎
const views = require('koa-views')

// 静态资源加载，不然js，css请求报错
const koaStatic = require('koa-static')

// 使用ctx.body解析中间件
const bodyParser = require('koa-bodyparser')

/*
    配置中间件
*/

const app = new Koa()


console.log(path.join(__dirname, '../static'))
    // 配置静态资源加载中间件
    // 静态资源目录对于相对入口文件app.js的路径
app.use(koaStatic(
    // 根目录设置
    path.join(__dirname, '../static')
))

// 配置ctx.body解析中间件
app.use(bodyParser())

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
        // map: { html: 'ejs' }
}))

const routers = require('./routers/index')
    // 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())


// const Router = require('koa-router')
// let route = new Router();
// 装载所有路由

// let article = require('./routers/article')
// let user = require('./routers/user')




// app.use(user.routes(), user.allowedMethods())
// app.use(article.routes(), article.allowedMethods())
//     // 加载路由中间件
// app.use(route.routes()).use(route.allowedMethods())

var port = '9386'

app.listen(port, () => {
    console.log('[demo] route-use-middleware is starting at port ' + port)
})

// 打开浏览器
var opn = require('opn')
    // 获取ip
var os = require('os')
var localhost = ''
try {
    var network = os.networkInterfaces()
    localhost = network[Object.keys(network)[0]][1].address
} catch (e) {
    localhost = 'localhost';
}
var uri = 'http://' + localhost + ':' + port

opn(uri)

// 如果用ip 访问不了，localhost可以，可能端口冲突