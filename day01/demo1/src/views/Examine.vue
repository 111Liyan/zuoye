<template>
  <div class="examin">
		<!-- 头部 -->
    <el-card class="box-card">
      <div class="box">
        <el-tag>当前审批中0本月审批通过1本月审批驳回0</el-tag>
        <div>
          <el-button type="primary" size="small">流程设置</el-button>
        </div>
      </div>
    </el-card>
		<!-- 表格 -->
    <el-card class="box-card">
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
			<el-table-column
      type="selection"
      width="55">
    </el-table-column>
        <el-table-column type="index" label="序号" sortable width="50">
        </el-table-column>
        <el-table-column prop="processName" label="审批类型" sortable >
        </el-table-column>
        <el-table-column prop="username" label="申请人" sortable >
        </el-table-column>
        <el-table-column prop="procCurrNodeUserName" label="当前审批人" sortable >
        </el-table-column>
        <el-table-column  label="审批发起时" sortable >
					<template #default="scope">
            {{
              new Date(scope.row.procApplyTime).toLocaleString().slice(0, 10)
            }}
          </template>
        </el-table-column>
        <el-table-column  label="审批状态" sortable >
					<template #default="scope">
            {{ scope.row.processState == 2 ? "审批通过" : "" }}
            {{ scope.row.processState == 4 ? "撤销" : "" }}
            {{ scope.row.processState == 1 ? "审批中" : "" }}
            {{ scope.row.processState == 3 ? "审批不通过" : "" }}
          </template>
        </el-table-column>
				<el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button  type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
      </el-table>
<!-- 分页 -->
			<div class="app">
				<el-pagination
          @size-change="handleSizeChange"
          @current-change="handleSizeChange"
          :current-page.sync="query.page"
          :page-size.sync="query.pageSize"
          layout="prev, pager, next"
          :total="query.total"
          style="margin-bottom: 20px"
        >
        </el-pagination>
			</div>
    </el-card>
  </div>
</template>
<script>
import { getExamine } from '../../Api/Examine'
import { STATUS } from '../../unlits/Status'
export default {
  data() {
    return {
			// 分页
      query: {
        page: 1,
        pageSize: 5,
				total:0
      },
			// 表格
			tableData:[]
    }
  },
  mounted() {
    this.examine()
  },
  methods: {
		// 表格的接口
    examine() {
      getExamine(this.query).then((res) => {
        console.log(res)
				if(res.status==STATUS.SUCCESS){
					this.tableData=res.data.data.rows
					this.total=res.data.data.total
				}
      })
    },
		// 分页
		handleSizeChange(){
			this.examine()
		}
  }
}
</script>
<style lang="scss" scoped>
.box-card {
  margin-top: 10px;
}
.box {
  display: flex;
  justify-content: space-between;
}
.app{
	text-align: center;
}
</style>
