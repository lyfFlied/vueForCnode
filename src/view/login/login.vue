<template>
  <div class="login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="login">
        <el-input type="text" v-model="ruleForm.login" auto-complete="off" placeholder="账号"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"/>
      </el-form-item>
      <el-form-item label="">
        <el-checkbox-group v-model="ruleForm.remember" style="text-align: left">
          <el-checkbox label="记住账号" name="type"/>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%;" type="primary" @click="submitForm('ruleForm')" :loading="loading">登陆
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import Headers from '@/packages/ui/Headers'
  import {mapState} from 'vuex'

  export default {
    name: 'Login',
    components: {
      Headers
    },
    /** state 默认信息 */
    data() {
      return {
        loading: false,
        ruleForm: {
          login: '',
          password: '',
          remember: false
        },
        rules: {
          login: [
            {required: true, message: '请输入登陆账户', trigger: 'blur'},
            {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入登陆密码', trigger: 'change'}
          ],
        }
      }
    },
    /** 计算属性 */
    computed: mapState({
      isLogin: state => state.user.auth.isLogin,
      user: state => state.user.auth.user,
    }),
    /** 方法事件 */
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true;
            console.log(this.ruleForm);
            this.$store.dispatch('accountLoginSubmit', {
              login: '15223719447',
              password: '12345678',
              remember: true
            })
          } else {
            return false
          }
        })
      },
      successWatcher(val) {
        this.loading = false;
        val && this.$router.push(this.$route.query.redirect_url || '/')
      }
    },
    /** 监听函数 */
    watch: {
      isLogin: 'successWatcher',
      $route() {
        this.path = this.$route.path.split('/')[2]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100%;
  }

  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    overflow: hidden;
    min-width: 270px;
    .title {
      text-align: center;
      color: #505458;
    }
  }
</style>
