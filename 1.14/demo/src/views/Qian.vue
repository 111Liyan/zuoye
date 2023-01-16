<template>
	<div class="qing">
		<div class="box">
			<div class="one">
				请假 | <el-switch
  v-model="value1"
  active-color="#13ce66"
  inactive-color="#ccc">
</el-switch>

			</div>
			<div class="one">
				加班 |  <el-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ccc">
</el-switch>
			</div>
			<div class="one">
				离职 |  <el-switch
  v-model="value3"
  active-color="#13ce66"
  inactive-color="#ccc">
</el-switch>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "",
	data () {
		return {
			value1: true,
			value2: true,
			value3: true,
		}
	},
	methods: {},
	created () { },
}
</script>

<style lang="scss" scoped>
.qing {
	padding: 20px;
	.box {
		width: 100%;
		height: 120px;
		border: 1px solid #ccc;
		display: flex;
		align-items: center;
		.one {
			text-align: center;
			width: 150px;
			height: 50px;
			padding: 10px;
			border: 1px solid #ccc;
			margin-left: 20px;
		}
	}
}
</style>