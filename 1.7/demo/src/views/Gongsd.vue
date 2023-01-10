<template>
  <div class="social">
    <div class="box">
      <div class="app">
        <el-button type="primary" plain
          >本月：入职 离职 调薪 未定薪</el-button
        >
        <div class="p">
					<p>设置</p>
					<p>NaN月报表</p>
				</div>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="序号" type="index" width="60" />
      <el-table-column prop="username" sortable label="审批类型" />
      <el-table-column prop="mobile" sortable label="申情人" />
      <el-table-column prop="workNumber" sortable label="当前审批人" />
      <el-table-column prop="departmentName" sortable label="审批发起时间" />
      <el-table-column prop="timeOfEntry" sortable label="审批状态" />
			<el-table-column fixed="right" label="操作" width="390">
				<el-button link type="primary" size="small">查看</el-button>
				</el-table-column>>
    </el-table>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="10"
        :total="11"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { ref, reactive, toRefs } from 'vue'
// // 引入路由
// const data = reactive({})
interface User {
  id: number
  username: string
  departmentName: string
  workNumber: null
  timeOfEntry: string
  leaveTime: null
  participatingInTheCityId: string
  participatingInTheCity: string
  mobile: string
  socialSecurityBase: string
  providentFundCityId: string
  providentFundCity: string
  providentFundBase: string
}
const tableData: User[] = [
  {
    id: '1063705482939731968',
    username: 'cgx',
    mobile: '13800000001',
    workNumber: '',
    departmentName: '',
    timeOfEntry: '2018-11-01',
    leaveTime: null,
    participatingInTheCityId: '1084825908823904256',
    participatingInTheCity: '北京',
    socialSecurityBase: 10000,
    providentFundCityId: '1084825908823904256',
    providentFundCity: '北京',
    providentFundBase: 10000
  },
  {
    id: '1063705989926227968',
    username: '666664587',
    mobile: '13800000002',
    workNumber: '9002',
    departmentName: '总裁办',
    timeOfEntry: '2018-11-02',
    leaveTime: null,
    participatingInTheCityId: '1084825908823904256',
    participatingInTheCity: '北京',
    socialSecurityBase: 10000,
    providentFundCityId: '1084825908823904256',
    providentFundCity: '北京',
    providentFundBase: 10000
  },
  {
    id: '1066370498633486336',
    username: '孙财',
    mobile: '13800000003',
    workNumber: '111',
    departmentName: '市场部',
    timeOfEntry: '2018-11-04',
    leaveTime: null,
    participatingInTheCityId: '1084825908823904256',
    participatingInTheCity: '北京',
    socialSecurityBase: 3388,
    providentFundCityId: '1084825908823904256',
    providentFundCity: '北京',
    providentFundBase: 2277
  },
  {
    id: '1071632760222810112',
    username: '罗晓晓',
    mobile: '13800000004',
    workNumber: '1111',
    departmentName: '人事部',
    timeOfEntry: '2018-12-02',
    leaveTime: null,
    participatingInTheCityId: '1084825908823904256',
    participatingInTheCity: '北京',
    socialSecurityBase: 5000,
    providentFundCityId: '1084825908823904256',
    providentFundCity: '北京',
    providentFundBase: 5000
  },
  {
    id: '1074238801330704384',
    username: '文吉星',
    mobile: '13400000001',
    workNumber: '1001',
    departmentName: '人事部',
    timeOfEntry: '2018-01-01',
    leaveTime: null,
    participatingInTheCityId: '1084825908823904256',
    participatingInTheCity: '北京',
    socialSecurityBase: 5900,
    providentFundCityId: '1084825908823904256',
    providentFundCity: '北京',
    providentFundBase: 5900
  },
  {
    id: '1074238801402007552',
    username: '巴思慧',
    mobile: '13400000002',
    workNumber: '1002',
    departmentName: '人事部',
    timeOfEntry: '2018-01-01',
    leaveTime: null,
    participatingInTheCityId: null,
    participatingInTheCity: null,
    socialSecurityBase: null,
    providentFundCityId: null,
    providentFundCity: null,
    providentFundBase: null
  },
  {
    id: '1075383133106425856',
    username: '乔海',
    mobile: '13500000001',
    workNumber: '2001',
    departmentName: '总裁办',
    timeOfEntry: '2018-01-01',
    leaveTime: null,
    participatingInTheCityId: null,
    participatingInTheCity: null,
    socialSecurityBase: null,
    providentFundCityId: null,
    providentFundCity: null,
    providentFundBase: null
  },
  {
    id: '1075383135371350016',
    username: '董昊空',
    mobile: '13500000002',
    workNumber: '2002',
    departmentName: '总裁办',
    timeOfEntry: '2018-01-01',
    leaveTime: null,
    participatingInTheCityId: null,
    participatingInTheCity: null,
    socialSecurityBase: null,
    providentFundCityId: null,
    providentFundCity: null,
    providentFundBase: null
  },
  {
    id: '1075383135459430400',
    username: '周乐天',
    mobile: '13500000003',
    workNumber: '2003',
    departmentName: '财务部',
    timeOfEntry: '2018-01-01',
    leaveTime: null,
    participatingInTheCityId: null,
    participatingInTheCity: null,
    socialSecurityBase: null,
    providentFundCityId: null,
    providentFundCity: null,
    providentFundBase: null
  },
  {
    id: '1235396724497268736',
    username: '吕勇锐',
    mobile: '13600000001',
    workNumber: '0001',
    departmentName: '总裁办',
    timeOfEntry: '1992-08-04',
    leaveTime: null,
    participatingInTheCityId: null,
    participatingInTheCity: null,
    socialSecurityBase: null,
    providentFundCityId: null,
    providentFundCity: null,
    providentFundBase: null
  }
]
</script>

<style lang="scss" scoped>
.page {
  margin-top: 10px;
  float: right;
}
.box {
  display: flex;
  .app {
    display: flex;
    justify-content: space-between;
		.p{
			display: flex;
			p{
				margin-left: 20px;
			}
		}
  }
}
</style>
