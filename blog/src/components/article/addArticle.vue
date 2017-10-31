<template>
  <div class="addArticle">
      <el-row>
        <el-col :lg="{span:8,offset:8}" :md="{span:12,offset:6}" :sm="{span:16,offset:4}" :xs="{span:20,offset:1}">
            <el-form :model="addArticleForm" :rules="rules" ref="addArticleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="标题" prop="title">
                    <el-input type="text" v-model="addArticleForm.title" auto-complete="off"  placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="内容" prop="content">
                    <el-input type="password" v-model="addArticleForm.content" auto-complete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="submitForm('addArticleForm')">提交</el-button>
                    <el-button @click="resetForm('addArticleForm')">重置</el-button>
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
            addArticleForm:{
                title:'',
                content:''
            },
            rules: {
                title: [
                    { validator: validateName, trigger: 'blur' }
                ],
                content: [
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

</style>


