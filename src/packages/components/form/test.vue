<template>
  <div class="payment">
    <Form
      :formList="formList"
      :ruleForm="ruleForm"
      :rules="rules"></Form>
  </div>
</template>

<script>
  import Form from 'pkgs/components/form'

  export default {
    components: {
      Form
    },
    data() {
      return {
        /** 表单列表项 */
        formList: [
          /** label：前缀     prop：字段名称   type：类型       placeholder：描述 */
          {label: '账号', prop: 'login', type: 'input', placeholder: '请输入账号'},
          {label: '金额', prop: 'number', type: 'number', placeholder: '请输入数字'},
          {
            label: '下拉',
            prop: 'selectValues',
            type: 'select',
            placeholder: '选择密码',
            /** 下啦数据 */
            data: [
              {label: '区域一', value: '1'},
              {label: '区域二', value: '2'},
              {label: '区域三', value: '3'},
            ]
          },
          {
            label: '多选',
            prop: 'checkboxValue',
            type: 'checkbox',
            data: [
              {label: '地推活动', value: 1},
              {label: '线下主题活', value: 2},
              {label: '单纯品牌曝光', value: 3},
            ]
          },
          {
            label: '单选',
            prop: 'radioValue',
            type: 'radio',
            data: [
              {label: '备选项11', value: 1},
              {label: '备选项22', value: 2},
              {label: '备选项33', value: 3},
            ]
          },
          {label: '日期时间', prop: 'dateTime', type: 'time', placeholder: '请输入日期时间'},
          {label: '提交', prop: '', type: 'button'},
        ],
        /** 结果集合 */
        ruleForm: {
          login: '',
          selectValues: '',
          checkboxValue: [],
          radioValue: '',
          dateTime: '',
          number: '',
        },
        /** 验证规则 */
        rules: {
          login: [
            {required: true, message: '请输入登陆账户', trigger: 'blur'},
            {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入登陆密码', trigger: 'change'}
          ],
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
