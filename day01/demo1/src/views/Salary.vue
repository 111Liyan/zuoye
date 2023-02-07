<template>
	<div class="salary">
		<!-- 头部 -->
		<el-card class="box-card">
      <div class="box">
        <el-tag>本月0：入职0离职0调薪0未调薪0</el-tag>
        <div>
          <el-button type="danger" size="small">设置</el-button>
          <el-button type="primary" size="small">报表</el-button>
        </div>
      </div>
		</el-card>
		<el-card class="box-card">
			<!-- 中间部分 -->
			<div class="box_top">
      <div class="box_conent">
        <el-form ref="form" :model="form" label-width="120px">
					<el-form-item label="聘用形式：">
            <el-checkbox-group v-model="form.type">
							<el-checkbox label="正式"></el-checkbox>
							<el-checkbox label="非正式"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
					<el-form-item label="员工状态：">
						<el-checkbox-group v-model="form.type1">
						<el-checkbox label="在职"></el-checkbox>
							<el-checkbox label="离职"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="部门：">
            <el-checkbox-group v-model="form.type2">
              <el-checkbox
                v-for="(item, index) in section"
                :key="index"
                :label="item.name"
                :name="item.id"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

        </el-form>
      </div>
    </div>
		</el-card>
		<!-- 表格 -->
		<el-card class="box-card">
			<el-table
        :data="tableData"
        style="width: 97%; margin: 20px 0 20px 20px"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="username" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="mobile" label="手机" width="120">
        </el-table-column>
        <el-table-column prop="workNumber" label="工号" sortable width="120">
        </el-table-column>
        <el-table-column prop="inServiceStatus" label="聘用形式" width="120">
          <template #default="scope">
            {{ scope.row.inServiceStatus == 1 ? "正式" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="departmentName" label="部门" width="120" />
        <el-table-column prop="timeOfEntry" label="入职时间" width="180">
          <template #default="scope">
            {{ scope.row.timeOfEntry.slice(0, 10) }}
          </template>
        </el-table-column>
        <el-table-column prop="currentPostWage" label="工资基金" width="120">
          <template #default="scope">
            {{ scope.row.currentPostWage * 2 }}
          </template>
        </el-table-column>
        <el-table-column prop="currentPostWage" label="津贴方案" width="120">
          通用方案
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              size="small"
              type="danger"
              v-if="scope.row.currentPostWage == null"
              >定薪</el-button
            >
            <el-button
              size="small"
              type="primary"
              v-if="scope.row.currentPostWage > 0"
              >调薪</el-button
            >
            <el-button type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
		</el-card>
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
	</div>
</template>
<script>
import {getSalary,getDepartment} from "../../Api/Salary"
import {STATUS} from "../../unlits/Status"
export default {
data() {
	return {
		// 中间部分
		form:{
			type:'',
			type1:'',
			type2:'',
		},
		// 分页
		query: {
        page: 1,
        pageSize: 5,
				total:0
      },
// 部门
		section:[],
		// 表格
		tableData:[]
	}
},
mounted(){
	this.department()
	this.salary()
},
methods:{
	// 表格的接口
	salary() {
		getSalary(this.query).then((res) => {
        console.log(res)
        if(res.status==STATUS.SUCCESS){
					this.tableData = res.data.data.rows
				this.query.total=res.data.data.total
				}
      })
    },
	department(){
			getDepartment().then(res=>{
				// console.log(res);
				if(res.status==STATUS.SUCCESS){
					this.section=res.data.data.depts
				}

			})
		},
		handleSizeChange(){
			this.salary()
		}
}
}
</script>
<style lang="scss" scoped>
.box-card{
	margin-top: 10px;
}
.box {
  display: flex;
  justify-content: space-between;
}
.app{
	text-align: center;
}
.box_top {
	width: 100%;
  margin: 20px;
  .box_conent {
    margin-top: 30px;
    margin-left: 10px;

  }
}

</style>
