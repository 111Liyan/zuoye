
<template>
	<div>
		<div class="box">
			<div class="top">
				<div class="topleft">
						<div>当前热卖品类</div>
				</div>
				<div class="topright">
					商品创建时间:2022-12-27 17.03
				</div>
			</div>
			<div id="list" style="width: 380px; height: 90px;">
</div>
		</div>
 </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
	data () {
		return {
		}
	},
	methods: {
	},
	created () {
	},
	mounted () {
		var chartDom = document.getElementById('list');
var myChart = echarts.init(chartDom);
var option;
option = {
	color:'#d9f390',
  xAxis: {
    type: 'category',
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
    }
  ]
};
option && myChart.setOption(option);
	},
	components: {
	},
	computed: {
	},
	watch: {
	},
}
</script>

<style lang='scss' scoped>
	.box{
		color: #fff;
		background: #2a2b2d;
		position: relative;
		margin-top: 1px;
		width: 100%;
		height: 150px;
		#list{
			margin-top:20px;
			position: absolute;
			top: 5px;
			background: #2a2b2d;
		}
		.top{
			display: flex;
			justify-content: space-between;
			.topright{
				margin-right: 10px;
				font-size: 12px;
				margin-top: 10px;
			}
			.topleft{
				margin-left: 10px;
				span{
					font-size: 12px;
				}
			}
		}
	}
</style>
