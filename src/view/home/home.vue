<template>
  <div id="load-index">
    <el-row :gutter="25" style="margin-left: 0; margin-right: 0">
      <el-col :span="10" :offset="5">
        <h1>{{name}}</h1>
      </el-col>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
    </el-row>
    <el-row :gutter="25" style="margin-left: 0; margin-right: 0">
      <Table
        :tableData="tableData"
        :tableHeader="tableHeader"
        :tableAttr="tableAttr"
        :pagination="pagination"
      />
    </el-row>
    <el-row :gutter="25" style="margin-left: 0; margin-right: 0">
      <Form
        :formList="formList"
      />
    </el-row>
  </div>
</template>

<script>
  import Form from 'pkgs/components/form'
  import Table from 'pkgs/components/table'

  export default {
    data() {
      return {
        name: '文章',
        value1: '',
        pagination: {
          total: 30,
          pagShow: true
        },
        formList: [
          {
            name: '姓名',
            pass: 'username',
            render: () => `<el-input></el-input>`,
            elementName: 'el-input',
            elementProps: {
              type: 'password'
            }
          }
        ],
        tableAttr: {
          width: 700
        },
        tableHeader: [
          {
            prop: 'date',
            label: '日期',
            width: 180
          }, {
            prop: 'name',
            label: '姓名',
            width: 180
          }, {
            prop: 'address',
            label: '地址',
            width: 280
          }, {
            prop: 'sex',
            label: '性别',
            width: 180
          }
        ],
        tableData: [],
      }
    },
    components: {
      Form,
      Table
    },
    mounted() {
      this.getTableData()
    },
    methods: {
      getTableData: function () {
        setTimeout(() => {
          this.tableData = [{
            date: '2016-05-02',
            name: '当然感染',
            address: '上海市普陀区金沙江路 1518 弄',
            sex: '男',
          }, {
            date: '2016-05-04',
            name: '德国',
            address: '上海市普陀区金沙江路 1517 弄',
            sex: '男',
          }, {
            date: '2016-05-01',
            name: '分号',
            address: '上海市普陀区金沙江路 1519 弄',
            sex: '男',
          }, {
            date: '2016-05-03',
            name: '分号',
            address: '上海市普陀区金沙江路 1516 弄',
            sex: '女',
          }]
        }, 500)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content-body {
    margin-top: 30px;
  }
</style>
