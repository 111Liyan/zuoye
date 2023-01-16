<template>
	<div class="company">
		<el-card>
			<el-button type="primary">添加权限</el-button>
		</el-card>
		<el-table :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" :data="lists" border
			style="width: 100% ;">
			<el-table-column prop="name" label="名称" />
			<el-table-column prop="code" label="标识" />
			<el-table-column prop="description" label="描述" />
			<el-table-column prop="username" label="操作" width="280">
				<span class="ons">添加</span>
				<span class="ons">编辑</span>
				<span class="ons">删除</span>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	name: "",
	data () {
		return {
			lists: [
				{ "id": "604f7df5f900be1850edb152", "name": "员工管理", "description": "用户管理菜单", "type": 1, "code": "employees", "pid": "0", "enVisible": "1" },
				{ "id": "604f7e07f900be1850edb153", "name": " 公司设置", "description": "公司设置菜单", "type": 1, "code": "settings", "pid": "0", "enVisible": "1" },
				{ "id": "604f7e17f900be1850edb154", "name": " 权限管理", "description": "权限菜单", "type": 1, "code": "permissions", "pid": "0", "enVisible": "1" },
				{ "id": "604f7e50f900be1850edb155", "name": " 社保", "description": " 社保", "type": 1, "code": "social_securitys", "pid": "0", "enVisible": "1" },
				{ "id": "604f7e5bf900be1850edb156", "name": "审批", "description": "审批", "type": 1, "code": "approvals", "pid": "0", "enVisible": "1" },
				{ "id": "604f7e66f900be1850edb157", "name": "考勤", "description": "考勤", "type": 1, "code": "attendances", "pid": "0", "enVisible": "1" },
				{ "id": "604f7e79f900be1850edb158", "name": "工资", "description": "工资", "type": 1, "code": "salarys", "pid": "0", "enVisible": "0" },
				{ "id": "604f7eabf900be1850edb159", "name": "组织架构", "description": "组织架构", "type": 1, "code": "departments", "pid": "0", "enVisible": "1" },
				{ "id": "6050175b140b332e04cced02", "name": "测试", "description": "aa", "type": 2, "code": "aa", "pid": "604f7df5f900be1850edb152", "enVisible": "1" },
				{ "id": "63bc2b8981b4da1595e809be", "name": "990", "description": "990", "type": 1, "code": "990", "pid": "63bc2b7c81b4da1595e809bc", "enVisible": "false" },
				{ "id": "63bc32fa81b4da1595e809cf", "name": "00", "description": "00", "type": 1, "code": "00", "pid": "63bc32f381b4da1595e809ce", "enVisible": "false" },
				{ "id": "63bcd33b81b4da1595e80a53", "name": "全能", "description": "aaa", "code": "/router", "enVisible": "0" },
				{ "id": "63bcd35a81b4da1595e80a55", "name": "quann", "description": "123", "code": "12312", "enVisible": "0" },
				{ "id": "63bcd39d81b4da1595e80a58", "name": "123", "description": "123", "code": "123", "enVisible": "0" },
			]
		}
	},
	methods: {},
	created () { }
}
</script>

<style lang="scss" scoped>
.company {
	padding: 10px;
}
.el-card {
	margin: 10px;
	.el-button {
		// float: right;
		margin-left: 1150px;
	}
}
.ons {
	color: rgb(31, 122, 242);
	margin-right: 5px;
}
</style>