<template>
  <div>
    <viewCont
      :listData="listData"
    />
  </div>
</template>

<script>
  import viewCont from 'pkgs/components/view-cont'

  export default {
    components: {
      viewCont
    },
    data() {
      return {
        listData: [
          {label: '姓名', value: '张三丰'},
          {label: '年龄', value: '1200'},
          {label: '性别', value: '男'},
          {label: '住址', value: '不写不行啊'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
