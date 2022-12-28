<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>名字：{{ text }}</h2>
    <button @click="getage">点击获取</button>
    <h1>名字v2:{{ name }}</h1>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  data() {
    return {
      name: "我是李四",
    };
  },
  setup() {
    console.log("setup");
    let text = "张三";
    function getage() {
      alert("我是一个方法");
    }
    return { text, getage };
  },
};
</script>
