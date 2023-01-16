<template>
  <div class="shense">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router
    >
      <el-menu-item index="/shense">角色管理</el-menu-item>
      <el-menu-item index="/si">公司信息</el-menu-item>
    </el-menu>
    <el-table :data="list" style="width: 100%">
      <el-table-column type="index" label="序号" width="55" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="pinem" label="描述" />
      <el-table-column fixed="right" label="操作" width="300">
        <template slot-scope="scope">
          <el-button type="success">分配权限</el-button>
          <el-button type="primary" @click="bj(scope.row)">编辑</el-button>
          <el-button type="danger" @click="del(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑弹框" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="角色名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="form.pinem" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>

export default {
  data() {
    return {
      activeIndex: '/shense',
      list: [
        {
          id: '1',
          name: '系统管理员',
          pinem: '管理整合平台，可以操作企业所有功能'
        },
        {
          id: '2',
          name: '人事经理',
          pinem: '负责整合人事部门'
        },
        {
          id: '3',
          name: '人事专员',
          pinem: '只能操作员工菜单'
        },
        {
          id: '4',
          name: '薪资专员',
          pinem: '绩效管理'
        },
        {
          id: '5',
          name: '员工',
          pinem: '员工'
        },
        {
          id: '6',
          name: '1',
          pinem: '1'
        },
        {
          id: '7',
          name: '2324',
          pinem: '4325'
        }
      ],
      dialogFormVisible: false,
      form: {
        id: '',
        name: '',
        pinem: ''
      }
    }
  },
  methods: {
    bj(row) {
      this.dialogFormVisible = true
      this.form = {
        ...row
      }
    },
    add() {
      let i = this.list.findIndex((item) => item.id === this.form.id)
      this.list.splice(i, 1, {
        ...this.form
      })
      this.dialogFormVisible = false
    },
		del(i) {
    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        this.list.splice(i, 1)
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
  }
  }

}
</script>
