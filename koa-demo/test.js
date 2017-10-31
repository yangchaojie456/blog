// http://www.cnblogs.com/zhongweiv/p/mongoose.html

var model = require("./model.js");

var User = model.User;
var Artical = model.ArticleSchema;
/**
 * 插入
 */
function insert() {

    var user = new User({
        username: '杨朝杰',                 //用户账号
        userpwd: '111111',                            //密码
        artical: [],                                //文章
        logindate: new Date()                      //最近登录时间
    });

    user.save(function (err, res) {

        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }

    });
}

insert();

// 根据用户名更新密码，执行后结果如图
// Model.update(conditions, update, [options], [callback])

function update() {
    var wherestr = { 'username': 'Tracy McGrady' };
    var updatestr = { 'userpwd': '22222' };

    User.update(wherestr, updatestr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

update();


// 常用方法还有findByIdAndUpdate，这种比较有指定性，就是根据_id

// 　　Model.findByIdAndUpdate(id, [update], [options], [callback])


function findByIdAndUpdate() {
    var id = '59ba2425f8c913b5dc5b4508';
    var updatestr = { 'userpwd': 'abcd' };

    User.findByIdAndUpdate(id, updatestr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

findByIdAndUpdate();


// 删除

// 　　Model.remove(conditions, [callback])
// Model.findByIdAndRemove(id, [options], [callback])　　　　　　
function del() {
    var wherestr = { 'username': 'Tracy McGrady' };

    User.remove(wherestr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

del();


// 条件查询

// 　　已先插入一些测试数据 。。

// 　　Model.find(conditions, [fields], [options], [callback])

function getByConditions() {
    var wherestr = { 'username': 'Tracy McGrady' };

    User.find(wherestr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

getByConditions();

// 第2个参数可以设置要查询输出的字段,比如改成

function getByConditions() {
    var wherestr = { 'username': 'Tracy McGrady' };
    var opt = { "username": 1, "_id": 0 };

    User.find(wherestr, opt, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

getByConditions();



// 输出只会有username字段，设置方法如上，1表示查询输出该字段，0表示不输出



// 　　比如我要查询年龄范围条件应该怎么写呢？

// 　　User.find({userage: {$gte: 21, $lte: 65}}, callback);    //这表示查询年龄大于等21而且小于等于65岁

// 其实类似的还有：　

// 　　$or　　　　或关系

// 　　$nor　　　 或关系取反

// 　　$gt　　　　大于

// 　　$gte　　　 大于等于

// 　　$lt　　　　 小于

// 　　$lte　　　  小于等于

// 　　$ne            不等于

// 　　$in             在多个值范围内

// 　　$nin           不在多个值范围内

// 　　$all            匹配数组中多个值

// 　　$regex　　正则，用于模糊查询

// 　　$size　　　匹配数组大小

// 　　$maxDistance　　范围查询，距离（基于LBS）

// 　　$mod　　   取模运算

// 　　$near　　　邻域查询，查询附近的位置（基于LBS）

// 　　$exists　　  字段是否存在

// 　　$elemMatch　　匹配内数组内的元素

// 　　$within　　范围查询（基于LBS）

// 　　$box　　　 范围查询，矩形范围（基于LBS）

// 　　$center       范围醒询，圆形范围（基于LBS）

// 　　$centerSphere　　范围查询，球形范围（基于LBS）

// 　　$slice　　　　查询字段集合中的元素（比如从第几个之后，第N到第M个元素）



// 　数量查询

// 　　Model.count(conditions, [callback])




function getCountByConditions() {
    var wherestr = {};

    User.count(wherestr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}
getCountByConditions();

// 　　res会输出数量，也可以传入条件做条件查询！