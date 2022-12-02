<template>
  <div class="home">
    <el-button type="primary" @click="add">新增todolist</el-button>
    <el-calendar v-model="value">
</el-calendar>
<el-dialog title="添加" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="事情名称">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="代办事项时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
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
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  },
  data() {
      return {
        value: new Date(),
        dialogFormVisible:false,
        form:{
          name:'',
          date1:'',
          date2:'',
          resource:'',
        }
      }
    },
    methods:{
      add(){
        this.dialogFormVisible=true
      }
    }
}
</script>
