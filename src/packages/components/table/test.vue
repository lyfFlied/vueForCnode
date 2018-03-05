<template>
  <div id="load-index">
    <Teble
      :tableData="tableData"
      :tableHeader="tableHeader"
      :tableAttr="tableAttr"
    />
  </div>
</template>

<script>
import Teble from './'

export default {
  data () {
    return {
      tableAttr: {
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
    Teble,
  },
  mounted () {
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
