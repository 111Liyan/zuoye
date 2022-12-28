<template>
  <div>
    <h3>姓名：{{ person.name }}</h3>
    <h3>年龄：{{ person.age }}</h3>
    <h3>工作种类：{{ person.job.type }}</h3>
    <h3>爱好：{{ person.hobby }}</h3>
    <h3>薪资：{{ person.job.salary }}</h3>
    <h3>测试C: {{ person.job.a.b.c }}</h3>
    <button @click="changeInfo">修改人的信息</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30K",
        a: {
          b: {
            c: 99,
          },
        },
      },
      hobby: ["抽烟", "喝酒", "烫头"],
    });
    function changeInfo() {
      (person.name = "李四"),
        (person.age = 28),
        (person.job.type = "后端"),
        (person.job.salary = "60K"),
        (person.job.a.b.c = 200),
        (person.hobby[0] = "敲代码");
    }
    return {
      person,
      changeInfo,
    };
  },
};
</script>