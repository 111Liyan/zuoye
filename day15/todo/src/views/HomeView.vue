<template>
  <div class="home">
    <el-button type="primary" @click="add">新增todolist</el-button>
    <el-calendar>
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template slot="dateCell" slot-scope="{ date, data }">
        <div class="box">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split("-").slice(2).join() }}
          </p>
          <ul>
            <li v-for="(item,index) in $store.state.list" :key="index">
              <p>
                <el-button
                class="bth"
                  type="success"
                  v-if="item.date == data.day && item.resource === '已办'"
                  @click="bids(item)">{{ item.name }}</el-button
                >
              </p>
              <p>
                <el-button
                class="bth"
                  type="danger"
                  v-if="item.date == data.day && item.resource === '代办'"
                  @click="bids(item)">{{ item.name }}</el-button
                >
              </p>
            </li>
          </ul>
        </div>
      </template>
    </el-calendar>
    <el-dialog :title="(flag===true?'修改':'添加')" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="事情名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="代办事项时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date"
              value-format="yyyy-MM-dd"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="事项状态">
          <el-radio-group v-model="form.resource">
            <el-radio label="代办"></el-radio>
            <el-radio label="已办"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="adds">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      value: "",
      dialogFormVisible: false,
      form: {
        name: "",
        date: "",
        resource: "",
      },
      // list:[]
      flag:false
    };
  },
  // computed: {
  //   list() {
  //     return this.$store.state.list;
  //   },
  // },
  methods: {
    add() {
      this.dialogFormVisible = true;
    },
    adds() {
      // this.list.push(this.form)
     if(this.flag==true){
      this.$store.commit('bjs',this.form)
     }else{
      this.$store.commit("add", this.form);
     }
      this.dialogFormVisible = false;
      this.form=""
    },
    bids(item){
      this.flag=true
      this.dialogFormVisible=true
      this.form={
        ...item
      }

    }
  },
};
</script>
<style lang="scss" scoped>
.is-selected {
  color: #1989fa;
}
.box {
  display: flex;
  justify-content: space-between;
}
ul {
  padding: 0;
  margin: 0;
  // height: 100px;
  list-style: none;
  // background-color: red;
  .bth{
    height: 20px;
    // margin-bottom: -40px;
  }
}
</style>
