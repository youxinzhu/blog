<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
        <div class="title-container">
          <h3 class="title">CMS管理系统</h3>
          <lang-select class="set-language"></lang-select>
        </div>
        <el-form-item prop="username">
          <el-input name="username" type="text" v-model="loginForm.username" size="47">
            <i slot="prefix" class="el-input__icon el-icon-date"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password" :type="passwordType"  v-model="loginForm.password" size="47" >
            <i slot="prefix" class="el-input__icon el-icon-date"></i>
            <i slot="suffix" class="el-input__icon el-icon-view"></i>
          </el-input>
        </el-form-item>
        <el-button type="primary"  @tap="Login">登录</el-button>
      </el-form>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data () {
     const validateUsername = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
       loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password',
      redirect: undefined
    }
  },
  methods: {
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
     login(){
       this.$refs.loginForm.validate(valid =>{
         if (valid) {
           this.loading = true
           this.$store.dispatch('Login',this.loginForm).then(()=>{
              this.loading = false
              this.$router.push({ path: this.redirect || '/' })
           }).catch(()=>{
              this.loading = false
           })
         }else{
            console.log('error submit!!')
            return false
         }
       })
     }
  }
}
</script>
/**scoped 表示只在此作用域下如果修改公共组件样式不要用scoped */
<style lang="less" scoped>
  @bg:#2d3a4b;
  @dark_gray:#889aa4;
  @light_gray:#eee;
  .login-container{
    position: fixed;
      height: 100%;
      width: 100%;
      background-color: @bg;
  }
  .el-form-item{
    height: 50px;
  }
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .title-container{
    color: @light_gray;
    margin: 40px;
    font-size: 2em;
  }
  .el-button{
    height: 47px;
    width: 100%;
  }
</style>
/**修改公共组件样式不要用scoped */
<style lang="less">
  @bg:#2d3a4b;
  @dark_gray:#889aa4;
  @light_gray:#eee;
  .login-container{
    .el-input{
      input{
        background: @bg
      }
    }
  }

</style>
