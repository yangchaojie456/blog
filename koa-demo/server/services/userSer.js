var user = require('../model/user');

module.exports = {
    /**
     * 注册
     * @param {object} formData 请求数据
     * if（验证用户数据）
     * if（用户名已被注册）
     * else 可以注册
     */
    async register(formData) {
        let result = {
            success: false,
            message: '',
            data: null,
            code: '203'
        }
        let username = formData.username;
        let password = formData.password;

        // 验证字段
        if (username == '') {
            result.message = '用户名不能为空'
            return result;
        }

        if (password == '') {

            result.message = '密码不能为空'
            return result;
        }

        // 验证用户名是否可用
        let names = await user.checkUsername(formData.username)

        if (names.length == 0) {

            let res = await user.register(formData)

            if (res._id) {
                result.message = '注册成功'
                result.success = true;
                result.code = 200;
                return result;
            }
        } else {
            result.message = '用户名已被使用'
            return result;
        }
    },
    /**
     * 登录
     * @param {object} formData 请求数据
     * if（验证请求数据）
     */
    async login(formData) {
        let result = {
            success: false,
            message: '',
            data: null,
            code: '203'
        }
        let username = formData.username;
        let password = formData.password;

        if (username == '') {
            result.message = '用户名不能为空'
            return result;
        }

        if (password == '') {

            result.message = '密码不能为空'
            return result;
        }

        let res = await user.login(formData)
        if (res.length == 0) {
            result.message = '用户名或密码错误'

        } else {
            result = {
                success: true,
                message: '登录成功',
                code: 200,
                data: { id: res[0]._id, username: res[0].username }
            }
        }

        return result;
    }


}