<template>
  <div class="home">
    {{ mag }}
    <p v-bind:title="message">鼠标悬停</p>
    <p v-if="flag">哈喽</p>
    <p v-if="!flag">再见</p>
    <button @click="add">点击</button>
    <p v-show="check">哈哈哈</p>
    <p v-show="!check">呵呵呵</p>
    <button @click="adds">点击切换</button>
    <ul>
      <li v-for="item in list" :key="item.id">{{item.name}}</li>
      <button @click="checks">切换</button>
    </ul>
    <input type="text" v-model="value">
    {{value}}
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      mag: "你好",
      message: '页面加载于' + new Date().toLocaleString(),
      flag:true,
      check:true,
      list:[
        {
          id:'1',
          name:'张三'
        },
        {
          id:'2',
          name:'李四'
        },
        {
          id:'3',
          name:'老刘'
        },
        {
          id:'4',
          name:'赵六'
        }
      ],
      value:''
    };
  },
  methods:{
    add(){
      this.flag=!this.flag
    },
    adds(){
      this.check=!this.check
    },
    checks(){
      this.list[0].name='王五'
    }
  }
};
</script>
