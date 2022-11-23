<template>
    <div>
        <el-table :data="getList" style="width: 100%">
      <el-table-column prop="user_name" label="姓名" > </el-table-column>
      <el-table-column prop="create_time" label="注册日期" > </el-table-column>
      <el-table-column prop="city" label="地址"> </el-table-column>
      <el-table-column prop="admin" label="权限"> </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleSizeChange"
      :current-page.sync ="pageIndex"
      :page-sizes="[5, 7, 9, 11]"
      :page-size.sync ="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="list.length">
    </el-pagination>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            list:[],
            getList:[],
            pageIndex:1,
            pageSize:4
        }
    },
    created(){
        axios.get('https://elm.cangdu.org/admin/all?offset=0&limit=20').then(res=>{
            console.log(res);
            this.list=res.data.data
            this.handleSizeChange()
        })
    },
    methods:{
        handleSizeChange(){
            this.getList=this.list.slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize)
        }
    }
}
</script>

