const Router = require('koa-router')

var userCtrl = require('../controller/userCtrl')

let user = new Router()

// 登录
user.get("/login", userCtrl.login)
// 登录接口
user.post("/login", userCtrl.loginOn)
// 注册
user.get("/register", userCtrl.register)
// 注册接口
user.post("/register", userCtrl.registerOn)

module.exports = user