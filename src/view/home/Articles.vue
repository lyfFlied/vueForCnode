<template>
  <div class="mainbody">
    <div v-for = "article in articles" :key="article.id" class="topics">
      <Article :article="article"> </Article>
    </div>
  </div>
</template>

<script>
  import Article from './Article'
  export default {
    name: 'articles',
    props: ['articles', 'tab'],
    components: {
      Article
    }
  }
</script>

<style scoped>
  .mainbody{
    width: 70%;
    background-color: white;
  }
  .topics{
    width: 100%;
    height: 50px;
    border-bottom: #f0f0f0 1px solid;
    line-height: 30px;
  }
</style>
