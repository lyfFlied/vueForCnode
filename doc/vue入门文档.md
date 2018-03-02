VUEJS

### 结构介绍，动态赋值，列表渲染
```html
<div id="app">
    <button @click="add">按钮</button>
    <button @click="change">改变</button>
   <ol id="list">
        <li v-for="item in arr">{{item.text}}</li>
   </ol>
   <p>{{msg}}</p>
   <p>{{arr}}</p>
   <p>{{json}}</p>
</div>    
```
```vue
new Vue({
    el:"#app",
    data:{
        msg:"Hello",
        arr:[{
            text:"大前端"
        },{
            text:"Java"
        },{
            text:"安卓"
        }],
        json:{a:"appple",b:"banana"}
    },
    methods:{
        add:function(){
            // 原生写法
            // document.getElementById("list").innerHTML += "<li>1</li>"
            this.arr.push({text: Math.random()});
            this.change();
        },
        change:function(){
            this.arr[1].text = "前端部门";
        }
    }
});
```
 - el: 跟节点
 - data: vue会对这个data里面所有初始化的对象进行监听，当发生变化 vue会自动渲染所有应用到的模板
 - methods：定义组件手动触发方法
 - @click | v-bind:click： 为节点绑定事件
 - `<li v-for="item in arr">{{item.text}}</li>`: for循环li标签，arr为数据源，item为列表里等每一项
 
 ### 输入事件
 ```html
    <div id="app">
        <div><input type="text" @keydown="show()"/></div>
        <div><input type="text" @keydown="showCode($event)"/></div>
        <div><input type="text" @keydown.13="showEnter()"/></div>
        <div><input type="text" @keydown.enter="showEnter()"/></div>
    </div>
```
```vue
        new Vue({
            el: "#app",
            data: {

            },
            methods: {
                show: function () {
                   console.log("哈哈");
                },
                showCode:function(ev){
                    if(ev.keyCode==13){
                        console.log("您按回车了");
                    }
                    console.log(ev.keyCode);
                    
                },
                showEnter:function(){
                    alert("您按回车了");
                }
            }
        });
```
- @keydown: 为节点绑定键盘按下事件，@keydown.13和@keydown.enter 是evnet.watch===13的简写。相同的@keydown.left==='按下鼠标左键'，@keydown.right==='按下鼠标右键'

### 动态控制style写法
```html
<div id="app">
   <p :title="msg" :style="{color:'red'}">文字。。。。。。</p>
   <p :title="msg" :style="[obj,bg]">文字。。。。。。</p>
   <p :title="msg" :style="more">文字。。。。。。</p>
</div>   
```
```vue
new Vue({
    el:"#app",
    data:{
        msg:"信息",
        obj:{color:'red'},
        bg:{background:"blue"},
        more:{
            color:"red",
            background:"gray"
        }
    }
});
```
- style: 可接收对象，数组写法。注意千万别省略了style前面的`:`号





