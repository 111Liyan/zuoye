<template>
  <div class="kaose">
    <div class="box">
      <el-card class="one">
        <div class="app">
          <div class="left">有0条考勤审批尚未处理</div>
          <div class="tow">
            <el-button type="danger">导入</el-button>
            <el-button type="warning">提醒</el-button>
            <el-button type="primary">设置</el-button>
            <el-button>历史归档</el-button>
            <el-button type="primary">202303报表</el-button>
          </div>
        </div>
        <div class="made">
          <div class="con-zero">
            <p>部门:</p>
          </div>
          <div class="con">
            <div class="con-one" v-for="(item, index) in lists" :key="index">
              <input type="checkbox" />
              <div class="names">{{ item.name }}</div>
            </div>
          </div>
        </div>
			<div class="moet">
				考勤状态：
				<div class="con-one" v-for="(item, index) in listsd" :key="index">
              <input type="checkbox" />
              <div class="names">{{ item.name }}</div>
            </div>
			</div>
      </el-card>
    </div>
    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="序号" type="index" width="60" />
        <el-table-column prop="username" label="姓名" />
        <el-table-column prop="workNumber" label="工号" />
        <el-table-column prop="departmentName" label="部门" />
        <el-table-column prop="mobile" label="手机" width="180" />
        <el-table-column prop="companyId" label="3/1" />
        <el-table-column prop="companyId" label="3/2" />
        <el-table-column prop="companyId" label="3/3" />
        <el-table-column prop="companyId" label="3/4" />
        <el-table-column prop="companyId" label="3/5" />
        <el-table-column prop="companyId" label="3/6" />
        <el-table-column prop="companyId" label="3/7" />
        <el-table-column prop="companyId" label="3/8" />
        <el-table-column prop="companyId" label="3/9" />
        <el-table-column prop="companyId" label="3/10" />
        <el-table-column prop="companyId" label="3/11" />
        <el-table-column prop="companyId" label="3/12" />
        <el-table-column prop="companyId" label="3/13" />
        <el-table-column prop="companyId" label="3/14" />
        <el-table-column prop="companyId" label="3/15" />
        <el-table-column prop="companyId" label="3/16" />
        <el-table-column prop="companyId" label="3/17" />
        <el-table-column prop="companyId" label="3/18" />
        <el-table-column prop="companyId" label="3/19" />
        <el-table-column prop="companyId" label="3/20" />
        <el-table-column prop="companyId" label="3/21" />
        <el-table-column prop="companyId" label="3/22" />
        <el-table-column prop="companyId" label="3/23" />
        <el-table-column prop="companyId" label="3/24" />
        <el-table-column prop="companyId" label="3/25" />
        <el-table-column prop="companyId" label="3/26" />
        <el-table-column prop="companyId" label="3/27" />
        <el-table-column prop="companyId" label="3/28" />
        <el-table-column prop="companyId" label="3/29" />
        <el-table-column prop="companyId" label="3/30" />
        <el-table-column prop="companyId" label="3/31" />
      </el-table>
      <div class="page">
        <p>共21条</p>
        <el-pagination layout="prev, pager, next" :page-size="10" :total="11" />
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
	data() {
		return {
			lists : [
  { name: '传智教育' },
  { name: '总裁办' },
  { name: '行政部' },
  { name: '人事部' },
  { name: '财务部111' },
	{ name: '财务核算部22' },
	{ name: '税务管理部' },
	{ name: '薪资管理部' },
  { name: '技术部' },
	{ name: 'Java研发部' },
	{ name: 'Python研发部' },
  { name: 'Php研发部' },
  { name: '运营部' },
  { name: '市场部' },



  { name: '北京事业部' },
  { name: '上海事业部' },
  { name: '规格' },
	{ name: '薪资管理部门' },
  { name: '运营什么部' },
  { name: '哒哒哒' },
  { name: '新年快乐' },
  { name: '嗯嗯翁无' },
],
listsd:[
	{name:'正常'},
	{name:'旷工'},
	{name:'事假'},
	{name:'调休'},
	{name:'迟到'},
	{name:'早退'},
],
tableData:[
	{
		username:"管理员",
		workNumber:'9002',
		departmentName:'总裁办',
		mobile:'	13800000002',
		companyId:'旷工'
	},
	{
		username:"孙财",
		workNumber:'111',
		departmentName:'市场部',
		mobile:'	13800000002',
		companyId:'旷工'
	},
	{
		username:"罗晓晓",
		workNumber:'1111',
		departmentName:'人事部',
		mobile:'	13800000002',
		companyId:'旷工'
	},
	{
		username:"文吉星",
		workNumber:'1001',
		departmentName:'人事部',
		mobile:'	13800000002',
		companyId:'旷工'
	},
	{
		username:"巴思慧	",
		workNumber:'1002',
		departmentName:'人事部',
		mobile:'	13800000002',
		companyId:'旷工'
	},
	{
		username:"乔海",
		workNumber:'2001',
		departmentName:'总裁办',
		mobile:'	13800000002',
		companyId:'旷工'
	},
	{
		username:"董昊空	",
		workNumber:'2002',
		departmentName:'总裁办',
		mobile:'	13800000002',
		companyId:'旷工'
	},
	{
		username:"周乐天	",
		workNumber:'2003',
		departmentName:'财务部',
		mobile:'	13800000002',
		companyId:'旷工'
	},
	{
		username:"吕勇锐",
		workNumber:'0001',
		departmentName:'总裁办',
		mobile:'	13800000002',
		companyId:'旷工'
	}
]
		}
	},
}
</script>

<style lang="scss" scoped>

.page {
  margin-top: 10px;
  float: right;
  display: flex;
}
.box {
  width: 100%;
  height: 180px;
  margin-bottom: 10px;
}
.one {
  height: 180px;
  line-height: 35px;
  width: 100%;
  .app {
    display: flex;
    .left {
      height: 30px;
      font-size: 15px;
      text-align: center;
      width: 200px;
      line-height: 30px;
      background-color: #e6f7ff;
      border: 1px solid #9fdaff;
    }
    .tow {
      margin-left: 600px;
      margin-right: 20px;
      .el-button {
        padding: 5px 10px 5px 10px;
      }
    }
  }
}
.made {
  display: flex;
  margin-top: 20px;
  .con-zero {
    width: 140px;
    font-weight: 700;
  }
}
.con {
  display: flex;
  flex-flow: wrap;
}
.con-one {
  display: flex;
  flex-flow: wrap;
  align-items: center;
  input {
    margin-left: 30px;
  }
  .names {
    margin-left: 5px;
  }
}
</style>
