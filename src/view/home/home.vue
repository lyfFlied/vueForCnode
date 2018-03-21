<template>
  <div id="load-index">
    <el-main class="mainBody">
      <div>
        <el-breadcrumb class="bodyHeadBar" separator-class="el-icon-arrow-righ">
          <span @click="getAppointArticle" val = "all"> 全部</span>
          <span @click="getAppointArticle " val = "good">精华</span>
          <span @click="getAppointArticle " val = "share">分享</span>
          <span @click="getAppointArticle " val = "ask">问答</span>
          <span @click="getAppointArticle " val = "job">招聘</span>
          <span @click="getAppointArticle " val = "dev">客户端测试</span>
        </el-breadcrumb>
      </div>
      <Articles :articles="articles" class="bodys"></Articles>
      <div class="login_mode">
        <p style="font-size: 14px;
    width: 64%;
    text-align: center;">CNode：Node.js专业中文社区</p>
        <div class="login_mode_1">您可以
          <a href="#/login" class="normal_login">登录</a>
          或
          <a href="#/register" class="normal_register">注册</a>
          , 也可以
          <a href="#/login" class="span_info_father"><span class="span_info">通过GitHub登陆</span></a>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
  import {Home} from '@/tools/api'
  import Articles from './Articles'
  export default {
    name: 'home',
    data() {
      return {
        articles: [],
        pageSize: 20,
        currentTab: 'all'
      }
    },
    created() {
      this.getArtics()
    },
    methods: {
      getArtics: function () {
        let requestParam = {
          'page': 1,
          'limit': this.pageSize,
        }
        Home.getArticles(requestParam).then((res) => {
          this.articles = res.data
          console.log(this.articles)
        }).catch((err) => {
          alert('发生错误' + err)
        })
      },
      getAppointArticle: function (event) {
        this.currentTab = event.target.attributes.val.value
        console.log('当前点击的是：' + this.currentTab)
      }
    },
    components: {
      Articles
    }
  }
</script>

<style scoped>
  .content-body {
    margin-top: 30px;
  }
  .mainBody {
    background-color: #e1e1e1;
  }
  .bodyHeadBar{
    background-color: #f6f6f6;
    height: 40px;
    line-height:40px;
    padding-left: 2%;
    width: 68%;
  }
  .bodyHeadBar span{
    text-decoration: none;
    color: #80bd01;
    margin-left: 1%;
  }
  .login_mode{
    float: left;
    width: 23%;
    height: 130px;
    background-color: white;
    margin-left: 23px;
    font-size: 14px;
  }
  .bodys{
    float: left;
  }
  .login_mode div .normal_login,.normal_register{
    color: #778087;
  }
  .login_mode div a{
    text-decoration: none;
  }
  .span_info{
    display: inline-block;
    float: none;
    padding: 3px 10px;
    border: none;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    cursor: pointer;
    letter-spacing: 2px;
    box-shadow: none;
    border-radius: 3px;
    line-height: 2em;
    vertical-align: middle;
    color: #fff;
    background-color: #5bc0de;
    margin-top: 4%;

  }
  .login_mode_1{
    padding-left: 3%;
    width: 100%;
  }
  .span_info_father{
    display: block;
  }
</style>
