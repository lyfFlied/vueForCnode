<template>
  <el-container>
    <el-header class="headbar">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="navbar">
        <router-link  class="navbarTitle" to="/">首页</router-link >
        <router-link  class="navbarTitle" to="/topicMore">主题详情</router-link >
        <router-link  class="navbarTitle" to="/payment">API</router-link >
        <router-link  class="navbarTitle" to="/about">关于</router-link >
        <router-link  class="navbarTitle" to="/register">注册</router-link >
        <router-link  class="navbarTitle" to="/login">登陆</router-link >
      </el-breadcrumb>
    </el-header>
    <router-view/>
    <el-footer>
    </el-footer>
  </el-container>
</template>

<script>

</script>

<style scoped>
  .headbar {
    margin-bottom: 0;
    z-index: 9;
    width: 100%;
    position: relative;
    background: #444;
    font-size: 13px;
  }

  .headbar .navbar {
    text-shadow: none;
    margin-top: 23px;
    font-size: 14px;
    float: right;
    margin-right: 49px;
  }

  .headbar .navbar .navbarTitle {
    color: #ccc;
    margin-right: 10px;
    text-decoration: none;
  }
  a{
    text-decoration: none;
  }
</style>
