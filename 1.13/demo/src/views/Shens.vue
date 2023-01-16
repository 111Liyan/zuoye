<template>
	<div class='shens'>
		<el-card class="box">
			<el-button type="primary" plain>当前审批中0本月审批通过1本月审批驳回0</el-button>
			<el-button type="primary" @click="add" class="bth">流程设置</el-button>
		</el-card>
		<el-card class="daaBox">
			<el-table ref="multipleTableRef" :data="tableData" style="width: 100%">
				<el-table-column type="selection" width="55" />
				<el-table-column type="index" label="序号" width="120" />
				<el-table-column property="processName" sortable label="审批类型" width="120" />
				<el-table-column property="username" sortable label="申请人" width="120" />
				<el-table-column property="procCurrNodeUserName" sortable label="当前审批人" width="240" />
				<el-table-column property="procData.startTime" sortable label="审批发起时间" width="180">
					<template slot-scope="scope">
						{{ scope.row.procApplyTime | filtimer }}
					</template>
				</el-table-column>

				<el-table-column property="processState" sortable label="审批状态" width="120">
					<template slot-scope="scope">
						<p v-show="scope.row.processState == 2">审批通过</p>
						<p v-show="scope.row.processState == 4">撤销</p>
						<p v-show="scope.row.processState == 1">审批中</p>
					</template>
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="200">
					<template slot-scope="scope">
					  <el-button  type="text" size="small">查看</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination :page-size="1" :pager-count="11" layout="prev, pager, next" :total="1">
			</el-pagination>
		</el-card>

	</div>
</template>
<script>
export default {
	data () {
		return {
			tableData: [
			{
            "departmentId": "1175311466846683136",
            "departmentName": "市场部",
            "procApplyTime": 1569236187000,
            "procCurrNodeUserId": "107163276022281011210742388013307043841074238801402007552",
            "procCurrNodeUserName": "文吉星 巴思慧 ",
            "procData": "{\"duration\":\"1\",\"reason\":\"个人原因\",\"holidayType\":\"1\",\"processName\":\"请假\",\"processKey\":\"process_leave\",\"startTime\":\"2019-09-16 00:00:00\",\"applyUnit\":\"按天\",\"endTime\":\"2019-09-17 00:00:00\",\"userId\":\"1066370498633486336\"}",
            "processId": "1175967133311934464",
            "processKey": "process_leave",
            "processName": "请假",
            "processState": "2",
            "timeOfEntry": 1541318400000,
            "userId": "1066370498633486336",
            "username": "孙财"
        }, {
            "departmentId": "1175311466846683136",
            "departmentName": "市场部",
            "procApplyTime": 1569236417000,
            "procCurrNodeUserId": "10753831331064258561075383135371350016",
            "procCurrNodeUserName": "乔海 董昊空",
            "procData": "{\"duration\":\"5\",\"reason\":\"没有原因\",\"holidayType\":\"1\",\"processName\":\"请假\",\"processKey\":\"process_leave\",\"startTime\":\"2019-09-15 00:00:00\",\"applyUnit\":\"按天\",\"endTime\":\"2019-09-19 00:00:00\",\"userId\":\"1066370498633486336\"}",
            "processId": "1175968095611101184",
            "processKey": "process_leave",
            "processName": "请假",
            "processState": "2",
            "timeOfEntry": 1541318400000,
            "userId": "1066370498633486336",
            "username": "孙财"
        }, {
            "departmentId": "1175311466846683136",
            "departmentName": "市场部",
            "procApplyTime": 1569236544000,
            "procCurrNodeUserId": "1063705989926227968",
            "procCurrNodeUserName": "itcast ",
            "procData": "{\"duration\":\"1\",\"reason\":\"xxxxx\",\"holidayType\":\"1\",\"processName\":\"请假\",\"processKey\":\"process_leave\",\"startTime\":\"2019-09-09 00:00:00\",\"applyUnit\":\"按天\",\"endTime\":\"2019-09-10 00:00:00\",\"userId\":\"1066370498633486336\"}",
            "processId": "1175968628937826304",
            "processKey": "process_leave",
            "processName": "请假",
            "processState": "4",
            "timeOfEntry": 1541318400000,
            "userId": "1066370498633486336",
            "username": "孙财"
        }, {
            "departmentId": "1175311466846683136",
            "departmentName": "市场部",
            "procApplyTime": 1569238151000,
            "procCurrNodeUserId": "107163276022281011210742388013307043841074238801402007552",
            "procCurrNodeUserName": "ll a01 a02 ",
            "procData": "{\"start_time\":\"2019-09-01 00:00:00\",\"reason\":\"随便填\",\"processName\":\"加班\",\"end_time\":\"2019-09-02 00:00:00\",\"processKey\":\"process_overtime\",\"userId\":\"1066370498633486336\"}",
            "processId": "1175975371407335424",
            "processKey": "process_overtime",
            "processName": "加班",
            "processState": "2",
            "timeOfEntry": 1541318400000,
            "userId": "1066370498633486336",
            "username": "孙财"
        }, {
            "departmentId": "1175310929766055936",
            "departmentName": "总裁办",
            "procApplyTime": 1583409279000,
            "procCurrNodeUserId": "10637059899262279681075383133106425856107538313537135001612353967244972687361235396819959627776",
            "procCurrNodeUserName": "管理员 乔海 董昊空 吕勇锐 袁永安 ",
            "procData": "{\"start_time\":\"2020-03-17 00:00:00\",\"reason\":\"java开发\",\"processName\":\"离职\",\"end_time\":\"2020-03-29 00:00:00\",\"processKey\":\"process_dimission\",\"userId\":\"1063705989926227968\"}",
            "processId": "1235413390924881920",
            "processKey": "process_dimission",
            "processName": "离职",
            "processState": "1",
            "timeOfEntry": 1541145600000,
            "userId": "1063705989926227968",
            "username": "管理员"
        }, {
            "departmentId": "1175310929766055936",
            "departmentName": "总裁办",
            "procApplyTime": 1583409371000,
            "procCurrNodeUserId": "10637059899262279681075383133106425856107538313537135001612353967244972687361235396819959627776",
            "procCurrNodeUserName": "管理员 乔海 董昊空 吕勇锐 袁永安 ",
            "procData": "{\"reason\":\"个人原因\",\"processName\":\"离职\",\"exceptTime\":\"2020-03-25 00:00:00\",\"processKey\":\"process_dimission\",\"userId\":\"1063705989926227968\"}",
            "processId": "1235413774988910592",
            "processKey": "process_dimission",
            "processName": "离职",
            "processState": "1",
            "timeOfEntry": 1541145600000,
            "userId": "1063705989926227968",
            "username": "管理员"
        }, {
            "departmentId": "1175310929766055936",
            "departmentName": "总裁办",
            "procApplyTime": 1583409412000,
            "procCurrNodeUserId": "null",
            "procCurrNodeUserName": "孙财 ",
            "procData": "{\"start_time\":\"2020-03-01 00:00:00\",\"reason\":\"java工作计划\",\"processName\":\"加班\",\"end_time\":\"2020-03-25 00:00:00\",\"processKey\":\"process_overtime\",\"userId\":\"1063705989926227968\"}",
            "processId": "1235413946837934080",
            "processKey": "process_overtime",
            "processName": "加班",
            "processState": "1",
            "timeOfEntry": 1541145600000,
            "userId": "1063705989926227968",
            "username": "管理员"
        }
			],
			arr: [],
		}
	},
	methods: {

		add () {
			this.$router.push('/qian')
		}
	},
	mounted () {
	},
	components: {
	},
	computed: {
	},
	filters: {
		filtimer (val) {
			return new Date(val * 1000).toLocaleDateString()
		}
	},
	watch: {
	},
}
</script>

<style lang='scss' scoped>
.box {
display: flex;
justify-content: space-between;
	height: 70px;
	position: relative;
	.dangBox {
		height: 30px;
		width: 300px;
		background-color: #E6F7FF;
		border: 1px solid #9FDAFF;
	}
	.bth{
		position: absolute;
		right: 20px;
	}
}
.el-pagination {
	margin-top: 20px;
	margin-left: 1000px;
}
</style>