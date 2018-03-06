<template>
  <div>
    <el-table
      highlight="true"
      :data="tableData"
      :border="tableAttr.border"
      :style="{width: defaWidth}">
      <el-table-column
        v-if="tableAttr.noIndex"
        type="index"
        width="50">
      </el-table-column>
      <el-table-column v-for="item in tableHeader"
                       :key="item.prop"
                       :prop="item.prop"
                       :label="item.label"
                       :width="item.width"
      >
      </el-table-column>
    </el-table>
    <div v-if="pagination.pagShow">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[10,20]"
        :page-size="pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total"
        background>
      </el-pagination>
    </div>
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
      /** 表格配置属性 */
      tableAttr: {
        width: {
          type: [Number, String],
          default: '100%'
        },
        border: {
          type: Boolean,
          default: true
        },
        noIndex: {
          type: Boolean,
          default: false
        }
      },
      /** 分页属性设置 */
      pagination: {
        pagShow: {
          type: Boolean,
          default: true
        },
        total: {
          type: Number,
          default: 0
        },
        pageSize: {
          type: Number,
          default: 1
        }
      },
      /** 表格数据 */
      tableData: Array,
      /** 表头 */
      tableHeader: Array,
    },
    computed: {
      defaWidth: function () {
        const {width} = this.tableAttr
        return isNaN(width) ? width : width + 'px'
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>
