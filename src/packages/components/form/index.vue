<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item
      v-for="item in formList"
      :key="item.prop"
      :label="item.label"
      :prop="item.prop"
    >
      <template v-if="item.type === 'input'">
        <el-input v-model="ruleForm[item.prop]" :placeholder="item.placeholder"/>
      </template>
      <template v-else-if="item.type === 'select'">
        <el-select v-model="ruleForm[item.prop]" :placeholder="item.placeholder">
          <el-option
            v-for="(list, index) in item.data"
            :key="index"
            :label="list.label"
            :value="list.value">
          </el-option>
        </el-select>
      </template>
      <template v-else-if="item.type === 'checkbox'">
        <el-checkbox-group v-model="ruleForm[item.prop]">
          <el-checkbox
            v-for="(list, index) in item.data"
            :key="index"
            :label="list.label"
          />
        </el-checkbox-group>
      </template>
      <template v-else-if="item.type === 'radio'">
        <el-radio-group v-model="ruleForm[item.prop]">
          <el-radio
            v-for="(list, index) in item.data"
            :key="index"
            :label="list.label"
          >{{list.label}}</el-radio>
        </el-radio-group>
      </template>
      <template v-else-if="item.type === 'time'">
        <el-date-picker
          v-model="ruleForm[item.prop]"
          type="datetime"
          :placeholder="item.placeholder">
        </el-date-picker>
      </template>
      <template v-else-if="item.type === 'button'">
        <el-button style="width: 100%;" type="primary" @click="submitForm('ruleForm')">{{item.label}}</el-button>
      </template>
      <template v-else-if="item.type === 'number'">
        <el-input-number v-model="ruleForm[item.prop]"/>
      </template>
      <div v-else>
        <el-input v-model="ruleForm[item.prop]"/>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    props: {
      formList: Array,
      ruleForm: Object,
      rules: Object,
    },
    data() {
      return {}
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm);
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>
