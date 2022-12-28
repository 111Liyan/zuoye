<template>
  <h2>一个人的信息</h2>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h4>工作种类：{{ job.type }}</h4>
  <h4>薪资：{{ job.salary }}</h4>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // let name = ref("张三");
    // let age = ref(18);
    // let job = ref({
    //   type: "前端工程师",
    //   salary: "30K",
    // });
    // function changeInfo() {
    //   name.value = "李四";
    //   age.value = 28;
    //   job.value.type = "后端";
    //   job.value.salary = "60K";

    // let name = ref("张三");
    //   let age = ref(18);
    //   let job = ref({
    //     type: "前端工程师",
    //     salary: "30K",
    //   });
    //   function changeInfo() {
    //     name.value = "李四";
    //     age.value = 28;
    //     job.value.type = "后端";
    //     job.value.salary = "60K";


    let name = ref("张三");
      let age = ref(18);
      let job = ref({
        type: "前端工程师",
        salary: "30K",
      });
      function changeInfo() {
        name.value = "李四";
        age.value = 28;
        job.value.type = "后端";
        job.value.salary = "60K";
    }
    // 返回一个对象（常用）
    return {
    //   name,
    //   age,
    //   job,
    //   changeInfo,


    // name,
    //   age,
    //   job,
    //   changeInfo,


    name,
      age,
      job,
      changeInfo,
    };
  },
};
</script>