const Router = require('koa-router')
const home = Router();

const homeCtrl = require('../controller/homeCtrl')

home.get('', async(ctx, next) => {
    // ctx.status = 301;
    ctx.redirect('/index');
})
home.get('/index', homeCtrl.index);
home.get('/getAllArticle', homeCtrl.getAllArticle)

module.exports = home;