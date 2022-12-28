<template>
    <div class="home"></div>
    <div>我是一个自定义的hook</div>
    <h3>{{ point }}</h3>
    <h3>横轴: {{ point.x }}</h3>
    <h3>纵轴: {{ point.y }}</h3>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import usePoint from "../hooks/User.js";
  export default defineComponent({
    setup() {
    //   const point = usePoint(); //复用打点hook(封装数据以及其要用的生命周期钩子) 组console.log(point,"point");
    //   return { point };

     //   const point = usePoint(); //复用打点hook(封装数据以及其要用的生命周期钩子) 组console.log(point,"point");
    //   return { point };

       const point = usePoint(); //复用打点hook(封装数据以及其要用的生命周期钩子) 组console.log(point,"point");
      return { point };
    },
  });
  </script>