var userSer = require('../services/userSer')

module.exports = {
    // 登录页
    async login(ctx) {
        if (ctx.cookies.get('persion')) {
            ctx.redirect('/index')
        } else {
            await ctx.render('login', {})
        }
    },
    // 登录接口
    async loginOn(ctx) {

        let formData = ctx.request.body;

        let result = await userSer.login(formData);

        //  插入用户信息
        if (result.success) {
            ctx.cookies.set('persion', JSON.stringify(result.data))
        }

        ctx.body = result;
    },

    // 注册页
    async register(ctx) {
        await ctx.render('register', {

        })
    },
    // 注册接口
    async registerOn(ctx) {

        let formData = ctx.request.body;
        result = await userSer.register(formData)
        ctx.body = result;
    }
}