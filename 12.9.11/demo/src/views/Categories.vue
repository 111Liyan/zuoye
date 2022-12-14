<template>
  <div>
    <el-card class="box-card">
      <div>
        <el-button type="primary" @click="dialogVisible = true">添加分类</el-button>
      </div>
      <!-- 表格 -->
      <el-table
        :data="tableData"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column type="index" label="#" sortable> </el-table-column>
        <el-table-column prop="roleName" label="分类名称" sortable> </el-table-column>
        <el-table-column prop="effective" label="是否有效" sortable>
          <template>
            <i class="el-icon-success"></i>
          </template>
        </el-table-column>
        <el-table-column prop="one" label="排序">
          <template slot-scope="scope">
            <el-tag :type="scope.row.one == '一级' ? '' : scope.row.one == '三级' ? 'warning' : ''">{{
              scope.row.one
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-edit" @click="bj(scope.$index)">编辑</el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="del(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 表格 -->
    </el-card>

    <!-- 对话框 -->
    <el-dialog title="添加商品分类" :visible.sync="dialogVisible" width="70%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="分类名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <div class="block">
          <span class="demonstration">父级分类</span>
          <el-cascader :options="options" :props="{ checkStrictly: true }" clearable></el-cascader>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 对话框 -->

    <!-- 编辑对话框 -->
    <!-- 对话框 -->
    <el-dialog title="修改分类" :visible.sync="dialogVisiblee" width="70%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="分类名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="editor">确定</el-button>
          <el-button @click="dialogVisiblee = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 对话框 -->
    <!-- 编辑对话框 -->

    <!-- 分配权限对话框 -->
    <!-- 对话框 -->
    <el-dialog title="分配权限" :visible.sync="dialogVisibleee" width="70%"> </el-dialog>
    <!-- 对话框 -->
    <!-- 分配权限对话框 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      dialogVisiblee: false,
      dialogVisibleee: false,
      ruleForm: {
        roleName: '',
        roleDesc: ''
      },
      rules: {
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
          { min: 2, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ],
        roleDesc: [
          { required: true, message: '请输入角色描述', trigger: 'blur' },
          { min: 2, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ]
      },
      index: null,
			options:[],
    }
  },
  methods: {
    getroles() {
      this.$http({ method: 'get', url: '/api/categoriesst' }).then((res) => {
        console.log(res)
        this.tableData = res.data.data
        // this.tableDatas=this.tableData
      })
    },
    submitForm(ruleForm) {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.tableData.push({ roleName: this.ruleForm.roleName, roleDesc: this.ruleForm.roleDesc })
          this.dialogVisible = false
          this.$message({
            message: '恭喜你，添加成功！',
            type: 'success'
          })
          this.ruleForm = {
            roleName: '',
            roleDesc: ''
          }
        }
      })
    },
    del(i) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.tableData.splice(i, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      // this.pages()
    },
    bj(i) {
      //点击编辑
      this.index = i
      this.dialogVisiblee = true
      this.ruleForm = {
        ...this.tableData[this.index]
      }
    },
    editor() {
      //确认编辑
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$set(this.tableData, this.index, { ...this.ruleForm })
          this.dialogVisiblee = false
          this.$message({
            message: '恭喜你，修改成功！',
            type: 'success'
          })
          this.ruleForm = {
            username: '',
            password: '',
            mobile: '',
            email: ''
          }
        }
      })
    }
  },
  created() {
    this.getroles()
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-top: 30px;
}
.el-icon-success {
  color: #39ce39;
}
</style>