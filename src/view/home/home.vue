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
      <Articles :articles="articles"></Articles>
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
</style>
