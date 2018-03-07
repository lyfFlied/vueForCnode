<template>
  <div id="load-index">
    <el-row :gutter="25" style="margin-left: 0; margin-right: 0">
      <Table
        :tableData="tableData"
        :tableHeader="tableHeader"
        :tableAttr="tableAttr"
        :pagination="pagination"
        @tableOtherClick="tableOtherClick"
      ></Table>
    </el-row>
  </div>
</template>

<script>
  import Form from 'pkgs/components/form'
  import Table from 'pkgs/components/table'

  export default {
    data() {
      return {
        pagination: {
          total: 30,
          pagShow: false
        },
        tableAttr: {
          noIndex: true,
          other: [
            {name: '查看'},
            {name: '编辑'},
          ]
        },
        tableHeader: [
          {
            prop: 'date',
            label: '日期',
            width: 120,
            sort: true
          }, {
            prop: 'name',
            label: '姓名',
            width: 80
          }, {
            prop: 'address',
            label: '地址',
            width: 280
          }, {
            prop: 'sex',
            label: '性别',
            width: 80
          },
        ],
        tableData: [],
      }
    },
    components: {
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
      },
      tableOtherClick(row, index) {
        console.log(row);
        console.log(index);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content-body {
    margin-top: 30px;
  }
</style>
