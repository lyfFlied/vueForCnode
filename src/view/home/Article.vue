<template>
  <div style="padding: 15px;height:20px">
    <a :title="article.author.loginname" style="float: left;">
      <img :src="article.author.avatar_url" class="author"/>
    </a>
    <div class="topic">
      <span :class = "[isSpecial ? 'special' : 'ordinary']">{{getTabs()}}</span>
      <a :href='"https://cnodejs.org/api/v1/topic/"+article.id'>{{article.title}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'article',
    data() {
      return {
        currentTab: [],
        isSpecial: false
      }
    },
    props: ['article', 'tabType'],
    methods: {
      getTabs: function() {
        if (this.article.top === true || this.article.good === true) {
          this.isSpecial = true
          return '顶置'
        }
          switch (this.article.tab) {
            case 'all':
              return '全部'
            case 'share':
              return '分享'
            case 'job':
              return '求职'
            case 'dev':
              return '测试'
            case 'top':
              return '顶置'
          }
      }
    },
    created() {
      this.getTabs()
    }
  }
</script>

<style scoped>
  .topic a{
    color:#333;
    text-decoration: none;
  }

  .topic{
    width: 100%;
  }
  .topic:hover{
    background: rgb(245,245,245);
  }
  .author{
    width: 30px;
    height: 30px;
    line-height: 30px;
  }

  .special {
    background-color: #80bd01;
    color: white;
    padding: 2px;
    border-radius: 5px;
  }
  .ordinary {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px;
    border-radius: 5px;
  }
</style>
