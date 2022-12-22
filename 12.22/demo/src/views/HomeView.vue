<template>
	<div class="home">
		<div class="top">
			<h2>大数据可视化系统数据分析同用模板</h2>
			<p class="time">{{time}}</p>
		</div>
		<div class="box">
			<div class="left">
					<div id="main"></div>
					<div id="main1"></div>
				
			</div>
      <div class="app">
					<div class="ctop">
						<p id="p">业绩总览</p>
						<p class="p">
							<span class="span">30500</span>
							<span class="an">万</span>
						</p>
					</div>
          <div id="id">

          </div>
				</div>
			<div class="rigth"></div>
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		name: 'HomeView',
		components: {},
    data() {
      return {
        time:new Date().toLocaleString()
      }
    },
		mounted() {
			this.haert(),
       this.hert();
       this.id();
		},
		methods: {
			haert() {
				var chartDom = document.getElementById('main');
				var myChart = echarts.init(chartDom);
				var option;

				option = {
					title: {
						text: '标题名称',
						textStyle: {
							color: '#fff',
							fontSize: 20,
						},
						// borderLeft: "10px solid #45b5f0"
						top: '20',
						left: '20',
					},
					grid: {
						left: '50px',
						top: '50px',
						bottom: '5%',
						// containLabel: true
					},
					xAxis: {
						show: false,
						// type: 'value',
						// boundaryGap: [0, 0.01]
					},
					yAxis: [
						{
							type: 'category',
							data: [
								'字段1',
								'字段2',
								'字段3',
								'字段4',
								'字段5',
								'字段6',
								'字段7',
								'字段8',
								'字段9',
							],
							axisLine: {
								//不显示y轴线条
								show: false,
							},
							axisTick: {
								//不显示刻度
								show: false,
							},
							axisLabel: {
								//修改刻度标签里面的文字颜色设置为白色
								color: '#fff',
							},
						},
						{
							data: [
								'1514',
								'1619',
								'1623',
								'1968',
								'2158',
								'2456',
								'3506',
								'4664',
								'8390',
							],
							axisLine: {
								//不显示y轴线条
								show: false,
							},
							axisTick: {
								//不显示刻度
								show: false,
							},
							axisLabel: {
								//修改刻度标签里面的文字颜色设置为白色
								color: '#fff',
							},
						},
					],
					series: [
						{
							name: '条',
							type: 'bar',
							data: [25, 30, 34, 40, 43, 48, 52, 56, 70],
							yAxisIndex: 0,
							itemStyle: {
								//修改第一组柱子的圆角
								barBorderRadius: 20,
								color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
									{
										offset: 0,
										color: '#03C794',
									},
									{
										offset: 1,
										color: '#0094F9',
									},
								]),
							},
							//柱子之间的距离
							barCategoryGap: 50,
							//柱子的宽度
							barWidth: 10,
							//显示柱子内的文字
							label: {
								show: true,
								//图形内显示百分比
								position: 'right',
								//{c}会自动的解析为数据 data里面的数据
								formatter: '{c}%',
							},
						},
						{
							name: '框',
							type: 'bar',
							barCategoryGap: 50,
							barWidth: 15,
							yAxisIndex: 1,
							data: [100, 100, 100, 100, 100, 100, 100, 100, 100],
							itemStyle: {
								//修改第一组柱子的圆角
								color: 'none',
								borderColor: '#00c1de',
								borderWidth: 3,
								barBorderRadius: 15,
							},
						},
					],
				};
				option && myChart.setOption(option);
			},
			hert() {
				var chartDom = document.getElementById('main1');
				var myChart = echarts.init(chartDom);
				var option = {
					title: {
						text: '标题名称',
						textStyle: {
							color: '#fff',
							fontSize: 20,
						},
						// borderLeft: "10px solid #45b5f0"
						top: '20',
						left: '20',
					},
					legend: {
						data: ['字段1', '字段2', '字段3'],
						textStyle: {
							color: '#fff',
						},
						top: '50',
						right: '100',
					},
					grid: {
						left: '50px',
						top: '80px',
						bottom: '7%',
						// containLabel: true
					},
					xAxis: {
						type: 'category',
						data: [
							'字段1',
							'字段2',
							'字段3',
							'字段4',
							'字段5',
							'字段6',
							'字段7',
							'字段8',
							'字段9',
						],
					},
					yAxis: {
						type: 'value',
						data: ['-500', '0', '500', '1000', '1500', '2000', '2500', '3000'],
					},
					series: [
						{
							name: '字段1',
							type: 'bar',
							stack: 'total',
							label: {
								show: false,
							},
							data: [470, 500, 400, 20, 300, 20, 100, 70, 2000],
							itemStyle: {
								color: '#8bd46e',
							},
						},
						{
							name: '字段2',
							type: 'bar',
							stack: 'total',
							label: {
								show: false,
							},
							data: [10, -40, 20, 10, 10, 30, 40, 5, 200],
							itemStyle: {
								color: '#f5804d',
							},
						},
						{
							name: '字段3',
							type: 'bar',
							stack: 'total',
							label: {
								show: false,
							},
							data: [0, 5, 20, -20, 0, 10, 0, 0, -20],
							itemStyle: {
								color: '#248ff7',
							},
						},
					],
				};
				option && myChart.setOption(option);
			},
      id(){
        var chartDom = document.getElementById('id');
				var myChart = echarts.init(chartDom);
				var option;
        var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#fff",
            },
          },
        },
        grid: {
          left: "50px",
          top: "80px",
          bottom: "7%",
          // containLabel: true
        },
        title: {
          text: "标题名称",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
          borderLeft: "10px solid #45b5f0",
          top: "20",
          left: "20",
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["字段1", "字段2", "字段3", "字段4", "字段5", "字段6"],
          textStyle: {
            color: "#fff",
          },
          top: "40",
          right: "240",
        },
        xAxis: [
          {
            type: "category",
            data: ["2016", "2017", "2018", "2019"],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            // min: 0,
            // max: 50,
            // interval: 50,
            data: ["0", "10", "20", "30", "40", "50"],
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "",
            min: -12,
            max: 9,
            interval: 5,
            // data: ["-12", "-9", "-6", "-3", "0", "3", "6", "9"],
            axisLabel: {
              formatter: "{value} %",
            },
          },
        ],
        series: [
          {
            name: "字段1",
            type: "bar",
            data: ["35", "38", "40", "40"],
            itemStyle: {
              color: "#8bd46e",
              barBorderRadius: 20,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: "#7fd173",
                },
                {
                  offset: 1,
                  color: "#16beae",
                },
              ]),
            },
          },
          {
            name: "字段2",
            type: "bar",
            data: ["15", "15", "15", "15"],
            itemStyle: {
              color: "#4272f4",
              barBorderRadius: 20,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: "#0094F9",
                },
                {
                  offset: 1,
                  color: "#03C794",
                },
                
              ]),
            },
          },
          {
            name: "字段3",
            type: "bar",
            data: ["5", "5", "5", "5"],
            itemStyle: {
              color: "#f5804d",
              barBorderRadius: 20,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: "#fabb13",
                },
                {
                  offset: 1,
                  color: "#f68a42",
                },
              ]),
            },
          },
          {
            name: "字段4",
            type: "line",
            data: ["30", "40", "38", "34"],
            itemStyle: {
              color: "#a1c8ae",
            },
          },
          {
            name: "字段5",
            type: "line",
            // yAxisIndex: 1,
            data: ["30", "15", "40", "50"],
            itemStyle: {
              color: "#2b63b7",
            },
          },
          {
            name: "字段6",
            type: "line",
            data: ["30", "24", "45", "5"],
            itemStyle: {
              color: "#b8a558",
            },
          },
        ],
      };
      option && myChart.setOption(option);
    
      }
		},
	};
</script>
<style lang="scss" scoped>
	.top {
		height: 80px;
		background-color: #09133c;
		display: flex;
		justify-content: center;
		position: relative;
		align-content: center;
		h2 {
			color: #fff;
		}
		p {
			position: absolute;
			right: 10px;
			color: #abadba;
      margin-top: 20px;
		}
	}
	.box {
		width: 100%;
		display: flex;
		height: 100vh;
		padding: 10px;
		//  box-sizing: border-box;
		background-image: linear-gradient(#010b46, #00338b);
		.left {
			width: 30%;
			// background-color: red;

      #main {
				margin-right: 10px;
				height: 400px;
				background-color: #04316c;
			}
			#main1 {
				margin-top: 10px;
				height: 200px;
				margin-right: 10px;
				background-color: #04316c;
			
    }
		
		}
    .app {
      margin-top: -15px;
        width: 40%;
        .ctop{
          height: 150px;
          box-sizing: border-box;
          background-color: #04316c;
          #p{
            color:#fff;
          }
          .span{
            color: #fef000;
        font-size: 50px;
        font-weight: 700;
        padding-left: 30px;
          }
          .an{
            color: #fef000;
        font-size: 35px;
        font-weight: 700;
          }
        }
        #id{
          margin-top: 10px;
          height: 240px;
          background-color: #04316c;
        }
			}
		.rigth {
			width: 30%;
			background-color: wheat;
		}
	}
</style>
