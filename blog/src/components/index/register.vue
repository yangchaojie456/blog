<template>
  <div class="register">
    <el-row>
            <el-col :lg="{span:8,offset:8}" :md="{span:12,offset:6}" :sm="{span:16,offset:4}" :xs="{span:20,offset:1}">
                <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input type="text" v-model="registerForm.username" auto-complete="off"  placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="registerForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
                        <el-button @click="resetForm('registerForm')">重置</el-button>
                    </el-form-item>
                </el-form>        
            </el-col>
        </el-row>
  </div>
</template>
<script>
export default {
    data(){
        var validateName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('用户名不能为空'));
            } else {
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('密码不能为空'));
            } else {
                callback();
            }
        };
        return {
            registerForm:{
                username:'',
                password:''
            },
            rules: {
                username: [
                    { validator: validateName, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ]            
            }
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {            
                if (valid) {
                    alert('submit!');
                } else {
                    alert('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<style lang="scss">
  .register{
    padding-top: 100px;
  }
</style>


