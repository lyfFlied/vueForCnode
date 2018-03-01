###vue 试例代码
```vue
<div id="app">
  <ul>
      <li v-for="product in products">
      <input type="number" v-model.number="product.quantity">
       {{ product.name }}
          <span v-if="product.quantity === 0">
            - OUT OF DTOCK
          </span>
          <button @click="product.quantity += 1">
            Aaa
          </button>
      </li>
  </ul>
  <h2>Total Inventory:{{ totalProducts }}</h2>
</div>

<script >
new Vue({
  el: '#app',
  data: {  
    products:[]
  },
  computed:{
    // 处理计算
    totalProducts(){
      return this.products.reduce((sum,product) => sum + product.quantity, 0)
    }
  },
  create(){
    // 组件创建时调用。可初始化数据
    setTimeout(() => {
      this.products = [
        {id:1,quantity:24,name:'dfgdfgg'},
        {id:2,quantity:4,name:'fhfdhdfhd'},
        {id:3,quantity:4,name:'sdsegsgsgs'},
        ]
    },500)
  }
})
</script>
```