<template>
	<div>
		<div class="box">
			<div id="left" style="width: 120px; height: 120px;">

			</div>
			<div class="right">

					<div class="righttop">
					<div class="righttopleft">
						<div>慕课外卖登录设备</div>
						<div class="egsli">Dist-botton of</div>
					</div>
					<div class="rightnum">
						1,543,462<span>台</span>
					</div>
				</div>

				<div class="rightbot">
					<div class="rightbotlist">
						<p>581,552</p>
						<p class="rightbotlistnum"><span></span>Androld</p>
					</div>
					<div class="rightbotlist">
						<p>530,677</p>
						<p class="rightbotlistnum"><span></span>iOS</p>
					</div>
					<div class="rightbotlist">
						<p>431,233</p>
						<p class="rightbotlistnum"><span></span>PC</p>
					</div>
				</div>
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
		var chartDom = document.getElementById('left');
var myChart = echarts.init(chartDom);
var option;
option = {
  title: {
    left: 'center',
    top: 20,
    textStyle: {
      color: '#ccc'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { value: 335,},
        { value: 310, },
        { value: 274, },
        { value: 235, },
        { value: 400, }
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      label: {
      },
      labelLine: {
        lineStyle: {
        },
      },
      itemStyle: {
        color: '#b4cc7f',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
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
		background: #2a2b2d;
		height: 150px;
		display: flex;
		#left{
			margin-top: 5px;
		}
		.right{
			color: #Fff;
			.rightbot{
				display: flex;
				.rightbotlist{
					margin-left: 20px;
					margin-top: 10px;
					.rightbotlistnum{
						position: relative;
						font-size: 12px;
					}
					span{
						display: inline-block;
						width: 5px;
						height: 5px;
						top: 6px;
						left: -10px;
						position: absolute;
						background: #e1ff84;
						border-radius: 50%;
					}
				}
			}
			.righttop{
				display: flex;
				margin-top: 20px;
				.righttopleft{
					.egsli{
						font-size: 12px;
					}
				}
			}
			.rightnum{
				margin-left: 15px;
				margin-top: 4px;
				font-size: 20px;
				span{
					font-size: 12px;
				}
			}
		}
	}
</style>
