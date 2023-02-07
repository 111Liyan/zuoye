<template>
  <div>
    <!-- 头部 -->
    <div class="employees-top">
      <div class="employees-top-title">

				<el-tag  icon="el-icon-edit">
当前共有 {{pagination.total}}条记录</el-tag>
        <div >
          <download-excel
            class="export-excel-wrapper"
            :data="tableData"
            type="xls"
            worksheet="My Worksheet"
            name="用户信息"
          >
            <el-button
              type="danger"
              size="small"
              >普通excel导出</el-button
            >
          </download-excel>
          <download-excel
            class="export-excel-wrapper"
            :data="tableData"
            type="xls"
            worksheet="My Worksheet"
            name="用户信息"
          >
					<el-button type="info" size="small">复杂excel导出</el-button>
          </download-excel>
          <el-button type="success" size="small">excel导出</el-button>
          <el-button type="primary" size="small" disabled>新增员工</el-button>
        </div>
      </div>
    </div>
    <div class="employees-table">
      <!-- 表格内容 -->
      <el-table
        :data="tableData"
        border

        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column type="index" label="序号" width="60">
        </el-table-column>
        <el-table-column prop="username" label="姓名" sortable>
        </el-table-column>
        <el-table-column prop="staffPhoto" label="头像">
          <template slot-scope="scope">
            <div>
              <img
                :src="scope.row.staffPhoto"
                alt=""
                style="width: 80px; height: 80px; border-radius: 50%"
              />
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" sortable>
        </el-table-column>
        <el-table-column prop="workNumber" label="工号" sortable>
        </el-table-column>
        <el-table-column prop="departmentName" label="聘用形式" sortable>
          <template slot-scope="scope">
            <div>
              {{ scope.row.departmentName == '' ? '未知' : '正式' }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="departmentName" label="部门" sortable>
        </el-table-column>
        <el-table-column prop="timeOfEntry" label="入职时间" sortable>
        </el-table-column>
        <el-table-column prop="timeOfEntry" label="账户状态" sortable>
          <template slot-scope="scope">
            <el-switch v-model="scope.row.enableState"> </el-switch>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="250" sortable>
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="examine(scope.row.id)"
              >查看</el-button
            >
            <el-button type="text" size="small">转正</el-button>
            <el-button type="text" size="small">调岗</el-button>
            <el-button type="text" size="small">离职</el-button>
            <el-button type="text" size="small" @click="getRole(scope.row.id)"
              >角色</el-button
            >
            <el-button type="text" size="small" disabled>删除</el-button>
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
          :page-size="pagination.size"
          layout="prev, pager, next"
          :total="pagination.total"
          style="margin: 20px 20px 30px 0; float: right"
        >
        </el-pagination>
      </div>
    </div>

    <el-dialog title="分配角色" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="">
          <el-checkbox-group v-model="form.type">
            <el-checkbox
              v-for="item in roleList"
              :key="item.id"
              :label="item.id"
              name="type"
              >{{ item.name }}</el-checkbox
            >
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
/**引入状态码 */
import { STATUS } from '../../unlits/Status'
/**引入封装的首页内容接口 */
import {
  staffGet,
  getAssignRolesl,
  getUserRole,
  getRole
} from '../../Api/Stats'
/**引入excel */
import {downloadexcel} from 'vue-json-excel'
export default {
  data() {
    return {
      /**分页数据 */
      pagination: {
        page: 1, //第一页数据
        size: 10, //一页十条数据
        total: 0
      },
      /**表格数据 */
      tableData: [],
      /**分配角色对话框 */
      dialogVisible: false,
      // 分配权限的id
      id: 1,
      form: {
        type: []
      },

      roleList: []
    }
  },
  mounted() {
    /**一进页面调用表格内容 */
    this.stafftable()
    this.Role()
  },
  methods: {
    /**获取员工表格内容 */
    stafftable() {
      staffGet(this.pagination).then((res) => {
        // console.log(res)
        if (res.status == STATUS.SUCCESS) {
          this.pagination.total = res.data.data.total
          this.tableData = res.data.data.rows
        }
      })
    },
    Role() {
      getRole().then((res) => {
        // console.log(res)
        this.roleList = res.data.data.rows
      })
    },
    /**分页事件 */
    handleSizeChange(val) {
      this.pagination.size = val
      this.stafftable()
    },
    /**分页事件 */
    handleCurrentChange(val) {
      this.pagination.page = val
      this.stafftable()
    },
    /**查看事件 */
    examine(id) {
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    },
    /**角色分配按钮 */
    onSubmit() {
      getAssignRoles({ id: this.id, roleIds: this.form.type }).then((res) => {
        console.log(res)
      })
      this.dialogVisible = false
    },
    getRole(id) {
      this.id = id
      this.dialogVisible = true
      getUserRole(id).then((res) => {
        console.log(res)
        if (res.data.data.roleIds == null) {
          this.form.type = []
          return
        }
        this.form.type = res.data.data.roleIds
      })
    }
  },
  created() {},

  components: {
    downloadexcel
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
/**头部 */
.employees-top {
	width: 100%;
  height: 60px;
  background: #fff;
  border: 1px solid #ebeef5;
	line-height: 60px;
  padding: 20px;
  .employees-top-title {
    display: flex;
		padding: 10px;
    justify-content: space-between;
    align-items: center;
  }
}
.download-excel{
	padding: 10px;
}
/**表格 */
.employees-table {
  // height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin: 20px;
}
.export-excel-wrapper {
  margin: 0 0 0 0;
}
</style>
