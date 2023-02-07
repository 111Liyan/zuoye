<template>
  <div>
    <div class="setting-title">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="角色管理" name="first">
          <el-button type="primary" size="small" @click="addrole"
            >新增角色</el-button
          >
          <!-- 表格 -->
          <el-table
            :data="tableData"
            border
            style="width: 97%; margin: 20px 0 20px 20px"
          >
            <el-table-column
              type="index"
              label="序号"
              width="50"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="description" label="描述" align="center">
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="success"
                  @click="apportion(scope.row.id)"
                  >分配权限</el-button
                >
                <el-button
                  size="mini"
                  type="primary"
                  @click="roleedit(scope.row, scope.row.id)"
                  >编辑</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="roledel(scope.row.id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div style="display: flex; justify-content: space-between">
            <p></p>
            <!-- 分页 -->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pagination.page"
              :page-size="pagination.pagesize"
              layout="prev, pager, next"
              :total="pagination.total"
            >
            </el-pagination>
            <p></p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="公司信息" name="second">
          <el-alert
            title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改"
            type="info"
            show-icon
            :closable="false"
          >
          </el-alert>
          <el-form
            ref="form"
            :model="form"
            label-width="120px"
            style="margin: 20px 0px 0px 65px"
          >
            <el-form-item label="公司名称">
              <el-input
                v-model="form.name"
                :disabled="true"
                style="width: 350px"
              ></el-input>
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input
                v-model="form.companyAddress"
                :disabled="true"
                style="width: 350px"
              ></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input
                v-model="form.mailbox"
                :disabled="true"
                style="width: 350px"
              ></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input
                type="textarea"
                v-model="form.remarks"
                :disabled="true"
                style="width: 350px"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 新增角色模态框 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form1" :model="form1" label-width="80px" :rules="rules">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="form1.description"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form1')">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 分配权限 -->
    <el-dialog title="分配权限" :visible.sync="dialogFormVisible2">
      <el-tree
        :data="roleList"
        show-checkbox
        node-key="id"
        :props="defaultProps"
        ref="tree"
      >
      </el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="editAssign">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
/**引入状态码 */
import { STATUS } from '../../unlits/Status'
/**引入封装的首页内容接口 */
import {
  setGet,
  settitleGet,
  addrolePost,
  delroleDelete,
  editrolePut,
  apportionroleGet,
  getUserRole,
  getAssignPrem
} from '../../Api/Setting'

import { toTree } from '../../unlits/taet'
export default {
  data() {
    return {
      /**tab栏切换 */
      activeName: 'first',
      /**分页数据 */
      pagination: {
        page: 1, //第一页数据
        pagesize: 10, //一页十条数据
        total: 0 //总条数
      },
      /**表格数据 */
      tableData: [],
      /**表单的内容展示 */
      form: {
        name: '',
        companyAddress: '',
        mailbox: '',
        remarks: ''
      },
      /**新增角色模态框 */
      dialogVisible: false,
      /**新增角色表单 */
      form1: {
        name: '',
        description: ''
      },
      /**新增角色表单验证 */
      rules: {
        name: [{ required: true, message: '角色名称不能为空', trigger: 'blur' }]
      },
      /**模态框动态标题 */
      title: '新增角色',
      /**判断拿到那个数据 */
      editid: 0,
      /**分配权限 */
      dialogFormVisible2: false,
      roleList: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      assignId: -1
    }
  },
  methods: {
    /**获取表格内容 */
    settable() {
      setGet(this.pagination).then((res) => {
        // console.log(res);
        if (res.status == STATUS.SUCCESS) {
          this.pagination.total = res.data.data.total
          this.tableData = res.data.data.rows
        }
      })
    },
    /**分页事件 */
    handleSizeChange(val) {
      this.pagination.pagesize = val
      this.settable()
    },
    /**分页事件 */
    handleCurrentChange(val) {
      this.pagination.page = val
      this.settable()
    },
    /**新增编辑角色确定对话框 */
    submitForm(formName) {
      this.title = '新增角色'
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.editid == -1) {
            addrolePost(this.form1).then((res) => {
              console.log(res)
              if (res.status == STATUS.SUCCESS) {
                this.$message({
                  message: '操作成功',
                  type: 'success'
                })
                this.settable()
                this.dialogVisible = false
                this.form1 = {
                  name: '',
                  description: ''
                }
              }
            })
          } else {
            editrolePut({
              id: this.editid,
              description: this.form1.description,
              name: this.form1.name
            }).then((res) => {
              console.log(res)
              if (res.status == STATUS.SUCCESS) {
                this.$message({
                  message: '操作成功',
                  type: 'success'
                })
                this.settable()
                this.dialogVisible = false
                this.form1 = {
                  name: '',
                  description: ''
                }
              }
            })
          }
        } else {
          return false
        }
      })
    },
    /**删除角色 */
    roledel(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          delroleDelete(id).then((res) => {
            console.log(res)
            if (res.status == STATUS.SUCCESS) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.settable()
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    /**编辑按钮 */
    roleedit(row, id) {
      this.editid = id
      this.title = '编辑角色'
      this.dialogVisible = true
      this.form1.name = row.name
      this.form1.description = row.description
    },
    /**添加角色 */
    addrole() {
      this.dialogVisible = true
      this.editid = -1
      this.title = '新增角色'
    },
    /**分配权限 */
    apportion(id) {
      this.dialogFormVisible2 = true
      this.assignId = id
      getUserRole(id).then((res) => {
        // console.log(res)
        this.$refs.tree.setCheckedKeys(res.data.data.permIds)
      })
    },
    /**分配权限确定按钮 */
    editAssign() {
      getAssignPrem({
        id: this.assignId,
        permIds: this.$refs.tree.getCheckedKeys()
      }).then((res) => {
        // console.log(res)
        this.$message({
          message: '分配权限成功',
          type: 'success'
        })
        this.dialogFormVisible2 = false
      })
    }
  },
  created() {},
  mounted() {
    /**一进页面调用 */
    this.settable()
    apportionroleGet().then((res) => {
      // console.log(res);
      if (res.status == STATUS.SUCCESS) {
        this.roleList = toTree(res.data.data)
      }
    })
    /**获取公司信息 */
    settitleGet().then((res) => {
      // console.log(res);
      if (res.status == STATUS.SUCCESS) {
        this.form.name = res.data.data.name
        this.form.companyAddress = res.data.data.companyAddress
        this.form.mailbox = res.data.data.mailbox
        this.form.remarks = res.data.data.remarks
      }
    })
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
/**全局 */
.setting-title {
  width: 1480px;
  // height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin: 20px;
  .demo-tabs {
    margin: 30px 0 50px 50px;
  }
}
</style>
