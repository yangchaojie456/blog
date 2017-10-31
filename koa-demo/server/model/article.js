// schema是mongoose里会用到的一种数据模式，
// 可以理解为表结构的定义；
// 每个schema会映射到mongodb中的一个collection，
// 它不具备操作数据库的能力

var mongoose = require('../../config/db'),
    Schema = mongoose.Schema;

/**
 * 文章信息
 */
var articleSchema = new Schema({
    title: { type: String }, //标题
    author: { authorId: { type: String }, authorName: { type: String } }, //作者
    content: { type: String }, //内容
    createDate: { type: Date }, //创建时间
    bannerImg: { type: String }
});
let Article = mongoose.model('Article', articleSchema);

module.exports = {

    // 写文章
    async writeArticle(formData) {
        let result = {};
        var article = new Article({
            title: formData.title, //标题
            author: { authorId: formData.userId, authorName: formData.userName }, //作者
            content: formData.content, //内容
            createDate: new Date(),
            bannerImg: formData.bannerImg
        });

        await article.save(function(err, res) {
            if (err) {
                console.log(err)
            } else {
                result = res;
            }
        });
        return result;

    },
    // 获取所有文章
    async getAllArticle() {
        let result = []
        var wherestr = {};
        await Article.find(wherestr, function(err, res) {
            if (err) {
                console.log(err)
            } else {
                result = res
            }
        })
        return result;
    }
}



// 定义好了Schema，接下就是生成Model。

// 　　model是由schema生成的模型，可以对数据库的操作



// 定义一个Schema就这么简单，指定字段名和类型

// 　　Schema Types内置类型如下：

// 　　String

// 　　Number

// 　　Boolean | Bool

// 　　Array

// 　　Buffer

// 　　Date

// 　　ObjectId | Oid

// 　　Mixed