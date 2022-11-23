<template>
  <div>
    <el-table :data="getList" border style="width: 100%">
      <el-table-column fixed prop="name" label="店铺名称">
      </el-table-column>
      <el-table-column prop="address" label="店铺地址"> </el-table-column>
      <el-table-column prop="category" label="店铺介绍">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="jib(scope.row)" 
            >编辑</el-button
          >
          <el-button type="danger" @click="del(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
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

    <el-dialog title="提示" :visible.sync="dialogVisible" width="40%">
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="店铺名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="店铺介绍" prop="category">
          <el-input v-model="ruleForm.category"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="店铺分类">
          <el-select v-model="ruleForm.category">
            <el-option label="快餐便当" value="shanghai"></el-option>
            <el-option label="简餐" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="店铺图片" prop="image_path">
          <!-- <template slot-scope="scope"> -->
            <!-- <img  :src="ruleForm.image_path" alt="" /> -->
            <el-image src="ruleForm.image_path"></el-image>
          <!-- </template> -->
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="adds">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            list:[],
            getList:[],
            pageIndex:1,
            pageSize:8,
            dialogVisible:false,
            ruleForm: {
        name: "",
        address: "",
        category: "",
        phone: "",
        category: "",
        image_path: "",
      },
        }
    },
    created(){
        axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=34.74725&longitude=113.624931&offset=0&limit=20').then(res=>{
            console.log(res);
            this.list=res.data
            this.handleSizeChange()
        })
    },
    methods:{
        handleSizeChange(){
            this.getList=this.list.slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize)

        },
        del(i) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.tableData.splice(i, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    bj(row) {
      this.dialogVisible = true;
      this.ruleForm = {
        ...row
      };
    },
    ok() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$set(this.tableData, this.index, { ...this.ruleForm });
          this.dialogVisible = false;
          this.$message({
            message: "恭喜你，编辑成功",
            type: "success",
          });
        }
      });
    },
    }
}
</script>

