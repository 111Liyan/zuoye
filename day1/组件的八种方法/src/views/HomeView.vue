<template>
  <div class="home">
    <!-- 1、:item 父传子 -->
    <!--2、 @click  子传父 -->
 <list class="li" v-for="item in list" :key="item.id" :item="item" @click="add(item.id)"></list>
 <!-- 4、v-model 传值 -->
 <!-- <h1>父组件的值：{{Date}}</h1>
 <list v-model="Date">第一个子组件</list> -->
 <!--5、 children 和 parent -->
  <!-- <list></list>
  <button @click="pageClick">点击修改</button> -->
  <!-- 6、ref 传值 -->
  <p>我是父组件获取子组件的值：{{pDate}}</p>
  <!-- <list ref="comClick"></list> -->

  <!-- vuex 传值 -->
  <list></list>
 <buts></buts>
  </div>
</template>

<script>
import list from "../components/List.vue"
import buts from "../components/Buis.vue"
export default {
  name: 'HomeView',
  components: {
    list,
    buts
  },
  data() {
    return {
      // list:[
      //   {
      //     name:'123',
      //     id:1
      //   },
      //   {
      //     name:'143',
      //     id:2
      //   },
      //   {
      //     name:'4443',
      //     id:3
      //   },
      //   {
      //     name:'454',
      //     id:4
      //   }
      // ],
      // Date:"父组件的值"

      // cpdata:'父组件的值'
      pDate:''
    }
  },
  methods:{
    add(id){
      console.log(id);
    },
    // pageClick(){
    //   this.$children[0].chilDate='这是父组件修改后的值'
    // },
    // getList(){
    //   let comClick=this.$refs.comClick
    //   this.pDate=comClick.chilDate
    //   comClick.chidEvent()
    // }
  },
  // mounted(){
  //   this.getList()
  // }
}
</script>
<style lang="scss" scoped>
.li{
  display: flex;
  justify-content: space-between;
}
</style>

