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
  /* data: function () {
    return {
      articles: [],
      messageTitle: {
        title: [],
        srcid: []
      },
      nomoralStyle: {
        background: '#fff',
        width: '70%',
        fontFamily: 'Hiragino Sans GB',
        height: '50px',
        borderBottom: '1px solid #f0f0f0',
        lineHeight: '50px'
      },
      bodyStyle: {
        paddingLeft: '2%',
        position: 'block',
        color: '#333',
        fontSize: '16px',
        textDecoration: 'none'
      }
    }
  },
  methods: {
    getArticles() {
      var _this = this
      fetch('https://cnodejs.org/api/v1/topics', {})
        .then(function (response) {
          return response.json()
        })
        .then(function (res) {
          for (var i = 0; i < res.data.length; i++) {
            console.log(res.data[i])
            _this.messageTitle.title.push(res.data[i].title)
            _this.messageTitle.srcid.push(res.data[i].id)
          }
        })
    },
    getAppointArticle(target) {

    }
  },
  mounted() {
    this.resultApi = this.getArticles();
  } */
  export default {
    components: {
      Form
    },
    data() {
      return {
        formList: [
          {label: '账号', prop: 'login', type: 'input', placeholder: '请输入账号'},
          {label: '金额', prop: 'number', type: 'number', placeholder: '请输入数字'},
          {
            label: '下拉',
            prop: 'selectValues',
            type: 'select',
            placeholder: '选择密码',
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
        ruleForm: {
          login: '',
          selectValues: '',
          checkboxValue: [],
          radioValue: '',
          dateTime: '',
          number: '',
        },
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
