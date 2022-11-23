<template>
  <div>
    <el-table :data="getList" style="width: 100%">
      <el-table-column prop="id" label="订单 ID" > </el-table-column>
      <el-table-column prop="time_pass" label="总价格" > </el-table-column>
      <el-table-column prop="status_bar.title" label="订单状态"> </el-table-column>
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
            pageSize:6
        }
    },
    created(){
        axios.get('https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined').then(res=>{
            console.log(res);
            this.list=res.data
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

