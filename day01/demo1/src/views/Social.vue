<template>
  <div class="social">
    <el-card class="box-card">
      <div class="box">
        <el-tag>本月：社保在缴公积金在缴增员减员入职离职</el-tag>
        <div>
          <el-button type="danger" size="small">历史归档</el-button>
          <el-button type="primary" size="small">202001报表</el-button>
        </div>
      </div>
		</el-card>
		<el-card class="top">
			<div class="box_top">
      <div class="box_conent">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="部门：">
            <el-checkbox-group v-model="form.type">
              <el-checkbox
                v-for="(item, index) in section"
                :key="index"
                :label="item.name"
                :name="item.id"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="社保城市：">
            <el-checkbox-group v-model="form.type1">
              <el-checkbox
                v-for="(item, index) in city"
                :key="index"
                :label="item.name"
                :name="item.id"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="公积金城市：">
            <el-checkbox-group v-model="form.type2">
              <el-checkbox
                v-for="(item, index) in city1"
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

      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column type="index" label="序号" sortable width="50">
        </el-table-column>
        <el-table-column prop="username" label="姓名" sortable >
        </el-table-column>
        <el-table-column prop="mobile" label="手机" sortable>
        </el-table-column>
				<el-table-column prop="workNumber" label="工号" sortable>
        </el-table-column>
				<el-table-column prop="departmentName" label="部门" sortable>
        </el-table-column>
				<el-table-column prop="timeOfEntry" label="入职时间" sortable>
        </el-table-column>
				<el-table-column prop="address" label="离职时间" sortable>
        </el-table-column>
				<el-table-column prop="participatingInTheCity" label="社保城市" sortable>
        </el-table-column>
				<el-table-column prop="providentFundCity" label="公积金城市" sortable>
        </el-table-column>
				<el-table-column prop="socialSecurityBase" label="社保基数" sortable>
        </el-table-column>
				<el-table-column prop="providentFundBase" label="公积金基数" sortable>
        </el-table-column>
				<el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button  type="text" size="small">查看详情</el-button>
      </template>
    </el-table-column>
      </el-table>
			<div class="app">
				<el-pagination
          @size-change="handleSizeChange"
          @current-change="handleSizeChange"
          :current-page.sync="pagination.page"
          :page-size.sync="pagination.pageSize"
          layout="prev, pager, next"
          :total="pagination.total"
          style="margin-bottom: 20px"
        >
        </el-pagination>
			</div>
  </div>
</template>
<script>
import { getSocial, getDepartment ,getCity} from '../../Api/Social'
import { STATUS } from '../../unlits/Status'
export default {
  data() {
    return {
      pagination: {
        page: 1,
        pageSize: 10,
				total:0
      },
			form:{
				type:'',
				type1:'',
				type2:'',
			},
			// 表格
      tableData: [],
			// 部门
			section :[],

			city:[],
			city1:[],


    }
  },
  mounted() {
    this.social()
		this.department()
  },
  methods: {
    social() {
      getSocial(this.pagination).then((res) => {
        // console.log(res)
        if(res.status==STATUS.SUCCESS){
					this.tableData = res.data.data.rows
				this.pagination.total=res.data.data.total
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
			getCity().then(res=>{
				console.log(res);
				if(res.status==STATUS.SUCCESS){
					this.city=res.data.data
					this.city1=res.data.data
				}
			})
		},
		handleSizeChange(){
			this.social()
		}
  }
}
</script>
<style lang="scss" scoped>
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
