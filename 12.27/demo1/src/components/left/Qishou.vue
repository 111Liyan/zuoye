<template>
	<div>
		<div class="box">
			<p>慕课外卖骑手概况</p>
			<p class="egls">flreif Oseldr nzkw</p>
			<div id="main" style="width: 400px; height: 200px;">

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
		var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;
option = {
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 820],
      type: 'line',
      smooth: true
    },
		{
      data: [720, 832, 801, 834, 1190, 1230, 520],
      type: 'line',
      smooth: true
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
	height: 140px;
	background: #2a2b2d;
	margin-top: 3px;
	color: #fff;
	position: relative;
}
	.egls{
		font-size: 12px;
	}
	#main{
		position: absolute;
		top: -20px;
	}
</style>