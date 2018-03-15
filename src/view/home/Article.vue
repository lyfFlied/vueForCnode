<template>
  <div style="padding: 15px;height: 35px;">
    <a :title="article.author.loginname" style="float: left;">
      <img :src="article.author.avatar_url" class="author"/>
    </a>
    <div class="topic">
      <span class="reply_count pull-left">
        <span title="回复数" class = "count_of_replies">{{article.reply_count}}</span>
        <span title="点击数" class="visit_count">/{{article.visit_count}}</span>
      </span>
      <span :class = "[isSpecial ? 'special' : 'ordinary']">{{getTabs()}}</span>
      <a :href='"https://cnodejs.org/api/v1/topic/"+article.id' class="topic_title">{{article.title}}</a>
      <a class="last_visitTime">
      <span  >
        {{getRepalyTime()}}
      </span>
      </a>
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
        if (this.article.top === true) {
          this.isSpecial = true
          return '顶置'
        }else if(this.article.good === true){
          this.isSpecial = true
          return '精品'
        }else if(this.article.tab === "ask"){
          return '问答'
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
        }
      }
      ,
      getRepalyTime: function () {
        if(this.article.last_reply_at){
          let last_reply = new Date(this.article.last_reply_at)
          let now_date = new Date()
          let timeLong = now_date - last_reply
          let day = Math.floor(timeLong/86400000)
          let hours
          let minute
          if(day < 1){
            hours = Math.floor(timeLong/3600000)
            if(hours < 1){
              minute = Math.floor(timeLong/60000)
              return minute+"分钟之前"
            }else{
              return hours+"小时之前"
            }
          }else{
            return day+"天之前"
          }
          console.log("最后回复时间："+ last_reply)
          console.log("当前时间:" + now_date)
          console.log("相差时间" + day)
        }else{
          return "刚刚"
        }
      }
    },
    created() {
      this.getTabs()
      this.getRepalyTime()
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
    font-size: 12px;
  }
  .ordinary {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px;
    border-radius: 5px;
    font-size: 12px;
  }
  .count_of_replies{
    color:#9e78c0;
    font-size: 14px;
    padding: 10px 0 10px 10px;
  }
  .visit_count{
    color: #b4b4b4;
    font-size: 10px;
  }
  .pull-left{
    float: left;
  }
  .reply_count{
    width: 80px;
    display: inline-block;
    text-align: center;
  }
  .topic_title{
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    line-height: 30px;
  }

  .last_visitTime{
    color: #778087;
    font-size: 11px;
    float: right;
  }
</style>
