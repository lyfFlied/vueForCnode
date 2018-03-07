<template>
  <div>
    <form class="el-form">
      <div class="el-form-item"
           v-for="(item, index) in listData"
           :key="index">
        <label class="el-form-item__label" style="width: 80px;">{{item.label}}  ：</label>
        <div class="el-form-item__content" style="margin-left: 80px;">
          <span>{{item.value}}</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  /**
   * 表格组件
   */
  export default {
    data() {
      return {}
    },
    props: {
      /** 要渲染的数据 */
      listData: Array
    },
    computed: {},
    methods: {}
  }
</script>
