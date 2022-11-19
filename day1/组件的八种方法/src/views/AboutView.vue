<template>
  <div class="about">
    <!-- 7provide和inject -->
    <p>{{pDate}}</p>
    <boot></boot>
    <button @click="dels">改变</button>
  </div>
</template>
<script>
import boot from "../components/Boot.vue"
export default {
  components:{
    boot
  },
  data() {
  return {
    pDate:'我是父组件的值'
  }
 },
  provide(){
    return{
      paDate:this.pDate
    }
  },
  methods:{
    dels(){
      this.pDate='我是改变后的父组件的值'
    }
  }
}
</script>

