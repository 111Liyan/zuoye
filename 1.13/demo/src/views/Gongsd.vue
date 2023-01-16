<template>

	<div class="gongsd">
		<el-card>
			<div class="box">
      <div class="app">
        <el-button type="primary" plain
          >本月0：入职 0 离职 0 调薪 0 未定薪 0</el-button
        >
        <div class="p">
					<el-button type="danger">设置</el-button>
					<el-button type="primary">报表</el-button>

				</div>
      </div>

	</div>
		</el-card>
		<el-card>
				<div class="laoliu">
					<div class="one">
						聘用形式：<span><input type="checkbox" />正式</span><span><input type="checkbox" />非正式</span>
					</div>
				</div>
				<div class="laoliu">
					<div class="one">
						员工状态： <span><input type="checkbox" />在职</span><span><input type="checkbox" />离职</span>
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
			</el-card>
			<el-table class="tab" :data="tableData" style="width: 100%">
				<el-table-column label="序号" type="index" width="60" />
				<el-table-column prop="username" label="姓名" />
				<el-table-column prop="mobile" label="手机" />
				<el-table-column prop="workNumber" label="工号" />
				<el-table-column label="聘用形式"> 未知 </el-table-column>
				<el-table-column prop="departmentName" label="部门" />
				<el-table-column label="入职时间">
					<template slot-scope="scope">
						{{ scope.row.timeOfEntry | filtimer }}
					</template>
				</el-table-column>
				<el-table-column label="工资基数">
					<template slot-scope="scope">
						{{ scope.row.currentPostWage + scope.row.currentBasicSalary }}
					</template>
				</el-table-column>
				<el-table-column label="津贴方案">通用方案</el-table-column>
				<el-table-column label="操作">
					<template>
						<el-button type="primary">调薪</el-button>
						<el-button type="text">查看</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1"
				:page-sizes="[10, 20, 30, 40]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="20">
			</el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	name: "",
	data () {
		return {
			lists: [
				{ "id": "604e115c7bfcfa45d019d3e9", "pid": "-1", "name": "传智教育", "code": "1", "introduce": "程序员的摇篮", "createTime": "2023-01-06 15:41:28" }, { "id": "604e21feb205b95968e13129", "pid": "", "name": "总裁办", "code": "1001222", "manager": "管理员", "introduce": "公司战略部", "createTime": "2021-03-14 22:47:25" }, { "id": "604e222bb205b95968e1312a", "pid": "", "name": "行政部", "code": "XZB", "manager": "管理员", "introduce": "行政部", "createTime": "2021-03-14 22:47:25" }, { "id": "604e223fb205b95968e1312b", "pid": "", "name": "人事部", "code": "RSB", "manager": "巴思慧", "introduce": "人事部", "createTime": "2023-01-13 16:51:03" }, { "id": "604e2251b205b95968e1312c", "pid": "", "name": "财务部111", "code": "CWB1", "manager": "管理员", "introduce": "财务部", "createTime": "2021-03-14 22:47:25" }, { "id": "604e2262b205b95968e1312d", "pid": "604e2251b205b95968e1312c", "name": "财务核算部22", "code": "CWHSB2", "manager": "管理员", "introduce": "财务核算部", "createTime": "2021-03-14 22:47:25" }, { "id": "604e227db205b95968e1312e", "pid": "604e2251b205b95968e1312c", "name": "税务管理部", "code": "SWGLN", "manager": "管理员", "introduce": "税务管理部", "createTime": "2021-03-14 22:47:25" }, { "id": "604e2297b205b95968e1312f", "pid": "604e2251b205b95968e1312c", "name": "薪资管理部", "code": "XZGLB", "manager": "管理员", "introduce": "薪资管理部", "createTime": "2021-03-14 22:47:25" }, { "id": "6051ad90e93db6522c1d00d2", "pid": "", "name": "技术部", "code": "JSB", "manager": "孙财", "introduce": "技术部", "createTime": "2021-03-17 15:18:23" }, { "id": "6051adb6e93db6522c1d00d3", "pid": "6051ad90e93db6522c1d00d2", "name": "Java研发部", "code": "JYFB", "manager": "管理员", "introduce": "JAVA研发部", "createTime": "2021-03-17 15:18:23" }, { "id": "6051add6e93db6522c1d00d4", "pid": "6051ad90e93db6522c1d00d2", "name": "Python研发部", "code": "PYFB", "manager": "罗晓晓", "introduce": "Python研发部", "createTime": "2021-03-17 15:18:23" }, { "id": "6051adefe93db6522c1d00d5", "pid": "6051ad90e93db6522c1d00d2", "name": "Php研发部", "code": "PhpYFB", "manager": "孙财", "introduce": "Php研发部", "createTime": "2021-03-17 15:18:23" }, { "id": "6051ae03e93db6522c1d00d6", "pid": "", "name": "运营部", "code": "YYB", "manager": "孙财", "introduce": "运营部", "createTime": "2021-03-17 15:18:23" }, { "id": "6051ae15e93db6522c1d00d7", "pid": "", "name": "市场部", "code": "SCB", "manager": "孙财", "introduce": "市场部", "createTime": "2021-03-17 15:18:23" }, { "id": "6051ae28e93db6522c1d00d8", "pid": "6051ae15e93db6522c1d00d7", "name": "北京事业部", "code": "BJSYB", "manager": "孙财", "introduce": "BJSYB", "createTime": "2021-03-17 15:18:23" }, { "id": "6051ae3de93db6522c1d00d9", "pid": "6051ae15e93db6522c1d00d7", "name": "上海事业部", "code": "SHSYB", "manager": "文吉星", "introduce": "上海事业部", "createTime": "2021-03-17 15:18:23" }, { "id": "63c1461d81b4da1595e89292", "pid": "63c143fb81b4da1595e89282", "name": "规格", "code": "规格", "manager": "巴思慧", "introduce": "规格", "createTime": "2023-01-06 15:41:28" }, { "id": "63c14de081b4da1595e89323", "pid": "604e2251b205b95968e1312c", "name": "薪资管理部门", "code": "123", "manager": "巴思慧", "introduce": "546757576", "createTime": "2023-01-06 15:41:28" }, { "id": "63c1594a81b4da1595e89376", "pid": "6051ae03e93db6522c1d00d6", "name": "运营什么部", "code": "1251613", "manager": "董昊空", "introduce": "什么咩咩咩咩吗", "createTime": "2023-01-06 15:41:28" }, { "id": "63c15b7e81b4da1595e89399", "pid": "604e21feb205b95968e13129", "name": "哒哒哒", "code": "111", "manager": "菜徐坤", "introduce": "鹅鹅鹅鹅鹅", "createTime": "2023-01-06 15:41:28" }, { "id": "63c15c8781b4da1595e8939b", "pid": "604e2251b205b95968e1312c", "name": "新年快乐", "code": "3333", "manager": "武高丽", "introduce": "出葡萄不吐葡萄皮", "createTime": "2023-01-06 15:41:28" }, { "id": "63c15e1a81b4da1595e893b2", "pid": "604e21feb205b95968e13129", "name": "嗯嗯翁无", "code": "444·", "manager": "前端郭二鸣", "introduce": "恶趣味无群", "createTime": "2023-01-06 15:41:28" }
			],
			tableData: [
				{
					departmentName: "总裁办",
					timeOfEntry: "2018-11-02T08:00:00.000+0000",
					id: "1063705989926227968",
					username: "等风来,不如追风去",
					mobile: "13800000002",
					workNumber: "9002",
					currentBasicSalary: 123,
					currentPostWage: 456,
					departmentId: "1175310929766055936",
					inServiceStatus: 1,
					formOfEmployment: 1
				},
				{
					timeOfEntry: "2018-11-04T08:00:00.000+0000",
					currentPostWage: 20,
					workNumber: "111",
					mobile: "13800000003",
					currentBasicSalary: 20,
					id: "1066370498633486336",
					departmentId: "1175311466846683136",
					departmentName: "市场部",
					username: "孙财",
					inServiceStatus: 1,
					formOfEmployment: 1
				},
				{
					username: "罗晓晓",
					timeOfEntry: "2018-12-02T08:00:00.000+0000",
					currentBasicSalary: 3,
					workNumber: "1111",
					id: "1071632760222810112",
					mobile: "13800000004",
					departmentName: "人事部",
					currentPostWage: 3,
					departmentId: "1175311267684352000",
					inServiceStatus: 1,
					formOfEmployment: 1
				},
				{
					workNumber: "1001",
					username: "文吉星",
					departmentName: "人事部",
					id: "1074238801330704384",
					currentBasicSalary: 5000,
					departmentId: "1175311267684352000",
					mobile: "13400000001",
					currentPostWage: 5000,
					inServiceStatus: 1,
					timeOfEntry: "2018-01-01T00:00:00.000+0000",
					formOfEmployment: 1
				},
				{
					workNumber: "1002",
					currentBasicSalary: 100,
					departmentName: "人事部",
					currentPostWage: 100,
					mobile: "13400000002",
					id: "1074238801402007552",
					username: "巴思慧",
					departmentId: "1175311267684352000",
					inServiceStatus: 1,
					timeOfEntry: "2018-01-01T00:00:00.000+0000",
					formOfEmployment: 1
				},
				{
					departmentName: "总裁办",
					currentBasicSalary: 7,
					id: "1075383133106425856",
					username: "乔海",
					mobile: "13500000001",
					currentPostWage: 7,
					departmentId: "1175310929766055936",
					workNumber: "2001",
					inServiceStatus: 1,
					timeOfEntry: "2018-01-01T00:00:00.000+0000",
					formOfEmployment: 1
				},
				{
					username: "董昊空",
					departmentName: "总裁办",
					workNumber: "2002",
					currentPostWage: 123,
					mobile: "13500000002",
					id: "1075383135371350016",
					currentBasicSalary: 123,
					departmentId: "1175310929766055936",
					inServiceStatus: 1,
					timeOfEntry: "2018-01-01T00:00:00.000+0000",
					formOfEmployment: 1
				},
				{
					workNumber: "2003",
					departmentName: "财务部",
					departmentId: "1175311325720936448",
					mobile: "13500000003",
					username: "周乐天",
					id: "1075383135459430400",
					currentPostWage: 10,
					currentBasicSalary: 10,
					inServiceStatus: 1,
					timeOfEntry: "2018-01-01T00:00:00.000+0000",
					formOfEmployment: 1
				},
				{
					timeOfEntry: "1992-08-04T08:00:00.000+0000",
					id: "1235396724497268736",
					departmentName: "总裁办",
					currentBasicSalary: 8888,
					mobile: "13600000001",
					workNumber: "0001",
					currentPostWage: 8888,
					username: "吕勇锐",
					departmentId: "1175310929766055936",
					inServiceStatus: 1,
					formOfEmployment: 1
				},
				{
					username: "袁永安",
					mobile: "13600000002",
					workNumber: "0002",
					currentPostWage: null,
					departmentName: "总裁办",
					currentBasicSalary: null,
					id: "1235396819959627776",
					departmentId: "1175310929766055936",
					timeOfEntry: "1993-08-04T08:00:00.000+0000",
					inServiceStatus: 1,
					formOfEmployment: 1
				}
			]
		}
	},
	methods: {
		handleSizeChange (val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange (val) {
			console.log(`当前页: ${val}`);
		}
	},
	created () { },
}
</script>
<style lang="scss" scoped>
.page {
  margin-top: 10px;
  float: right;
}
.box {
  display: flex;
	position: relative;
  .app {
    display: flex;

		.p{
			display: flex;
			position: absolute;
			right: 20px;

		}
  }
}
.laoliu {
	margin: 10px;
	margin-left: 25px;
	div {

		text-align: right;
		font-weight: 550;
		span {
			margin-left: 10px;
			font-weight: 400;
			input {
				margin-right: 5px;
			}
		}
	}
}
.tab {
	margin-top: 20px;
	padding: 10px;
}
.one {
	display: flex;
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

