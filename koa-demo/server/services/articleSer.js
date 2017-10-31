var article = require('../model/article');

module.exports = {

    // 写文章
    async writeArticle(formData) {
        let result = {
            success: false,
            message: '',
            data: null,
            code: 203
        }
        if (formData.title == '') {
            result.message = '标题不能为空'
            return result;
        }
        if (formData.content == '') {
            result.message = '内容不能为空'
            return result;
        }
        // 新增文章
        let res = await article.writeArticle(formData)
        if (res._id) {
            return {
                success: true,
                message: '添加成功',
                data: null,
                code: 200
            }
        }
    },
    // 获取所有文章
    async getAllArticle() {
        let result = {
            success: false,
            message: '',
            data: null,
            code: 203
        }
        let res = await article.getAllArticle();
        if (res.length == 0) {
            result.message = '没有文章'
            return result
        } else {
            result.data = res;
            return result
        }
    }
}