var articleSer = require('../services/articleSer')

module.exports = {
    async index(ctx) {
        await ctx.render('index', {})
    },
    async getAllArticle(ctx) {
        let result = null;
        result = await articleSer.getAllArticle();
        ctx.body = result;
    }
}