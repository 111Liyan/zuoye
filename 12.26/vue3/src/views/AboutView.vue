<template>
  <div class="">
    <!-- <h1>{{ data }}|{{ age }}</h1>
    <button @click="add">点我有惊喜</button>
    <h2></h2> -->
    <!-- <h2>一个人的信息</h2>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <h4>工作种类：{{ job.type }}</h4>
    <h4>薪资：{{ job.salary }}</h4>
    <button @click="changeInfo">修改人的信息</button> -->

    <!-- <h3>姓名：{{ person.name }}</h3>
    <h3>年龄：{{ person.age }}</h3>
    <h3>工作种类：{{ person.job.type }}</h3>
    <h3>爱好：{{ person.hobby }}</h3>
    <h3>薪资：{{ person.job.salary }}</h3>
    <h3>测试C：{{ person.job.a.b.c }}</h3>
    <button @click="changeInfo">修改人的信息</button> -->


    <h3>姓名：{{ person.name }}</h3>
    <h3>年龄：{{ person.age }}</h3>
    <h3>工作种类：{{ person.job.type }}</h3>
    <h3>爱好：{{ person.hobby }}</h3>
    <h3>薪资：{{ person.job.salary }}</h3>
    <h3>测试C：{{ person.job.a.b.c }}</h3>
    <button @click="changeInfo">修改人的信息</button>
  </div>
</template>

<script>
import { h, ref, reactive } from "vue";
export default {
  components: {},
  setup() {
    // const data = "我是老六";
    // const age = "6";
    // function add () {
    //   alert(`${data},今年${age}岁`);
    // }
    // // return () => h("h2", "我是vue3的语法");
    // return { data, age, add };
    //
    // let name = ref("张四");
    // let age = ref(18);
    // let job = ref({
    //   type: "前端工程师",
    //   salary: "30K",
    // });
    // function changeInfo () {
    //   name.value = "老六";
    //   age.value = 28;
    //   job.value.type = "算法工程师";
    //   job.value.salary = "60K";
    // }
    // return {
    //   name,
    //   age,
    //   job,
    //   changeInfo,
    // };




     // const data = "我是老六";
    // const age = "6";
    // function add () {
    //   alert(`${data},今年${age}岁`);
    // }
    // // return () => h("h2", "我是vue3的语法");
    // return { data, age, add };
    //
    // let name = ref("张四");
    // let age = ref(18);
    // let job = ref({
    //   type: "前端工程师",
    //   salary: "30K",
    // });
    // function changeInfo () {
    //   name.value = "老六";
    //   age.value = 28;
    //   job.value.type = "算法工程师";
    //   job.value.salary = "60K";
    // }
    // return {
    //   name,
    //   age,
    //   job,
    //   changeInfo,
    // };
    //
    //
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "吹牛逼",
        salary: "30K",
        a: {
          b: {
            c: 99,
          },
        },
      },
      hobby: ["抽烟", "喝酒", "打豆豆"],
    });
    function changeInfo() {
      (person.name = "李四"),
        (person.age = 28),
        (person.job.type = "大牛逼"),
        (person.job.salary = "60K"),
        (person.job.a.b.c = 200),
        (person.hobby[0] = "吃屎");
    }
    return {
      person,
      changeInfo,
    };
  },
};
</script>

<style lang="scss" scoped></style>