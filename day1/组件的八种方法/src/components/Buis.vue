<template>
    <div>
 <!-- <div>list兄弟传过来的值</div> -->
 <p>第二个组件获取到的值：{{showDates}}</p>
 <button @click="handt">点击将第二个传给第一个</button>
    </div>
    </template>
 
<script>
import eventBus from "../uilt/req"
export default {
    data() {
        return {
            // msg: "",
            dateC:'第二个的值'
        }
    },
      created() {
    // 监听接收值
    eventBus.$on('page', (data) => {
      console.log(data, 'data');
    })
  },
   beforeDestroy() {
    // 解除监听接收值
    eventBus.$off('page')
  },
  computed:{
    showDates(){
        return this.$store.state.dateC
    }
  },
  methods: {
    handt(){
        this.$store.commit('dateCs',this.dateC)
    }
 
  },
};
</script>
