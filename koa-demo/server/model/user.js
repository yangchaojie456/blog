// schema是mongoose里会用到的一种数据模式，
// 可以理解为表结构的定义；
// 每个schema会映射到mongodb中的一个collection，
// 它不具备操作数据库的能力

var mongoose = require('../../config/db'),
    Schema = mongoose.Schema;

/**
 * 用户信息
 */
var UserSchema = new Schema({
    username: { type: String }, //用户账号
    userpwd: { type: String }, //密码
    logindate: { type: Date } //最近登录时间
});
let User = mongoose.model('User', UserSchema);
module.exports = {
    async register(formData) {

        let result = {};
        var user = new User({
            username: formData.username, //用户账号
            userpwd: formData.password, //密码
            logindate: new Date() //最近登录时间
        });

        await user.save(function(err, res) {

            if (err) {
                console.log(err)
            } else {
                result = res;
            }
        });
        return result;
    },
    // 登录
    async login(formData) {

        let result = [];

        var wherestr = { 'username': formData.username, 'userpwd': formData.password };

        await User.find(wherestr, function(err, res) {
            if (err) {
                console.log('登录报错：' + err)
            } else {
                result = res;
            }
        })
        return result;
    },
    // 用户名唯一性验证
    async checkUsername(username) {
        let result = [];

        var wherestr = { 'username': username };

        await User.find(wherestr, function(err, res) {
            if (err) {
                console.log('登录报错：' + err)
            } else {
                result = res;
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