<template>
	<div class="dist">
		<div class="top">
			<img src="../../public/Apple.png" alt="">
			<div class="rig">
				<p>cgx<el-button size="mini" type="danger">离职</el-button></p>
				<p>最新工资基数 入职时间 2018-11-01 联系电话 13800000001</p>
				<p>本月不缴纳社保<el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
本月不缴纳公积金
<el-switch
  v-model="value1"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>

</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value:true,
			value1:true
		}
	},
}
</script>

