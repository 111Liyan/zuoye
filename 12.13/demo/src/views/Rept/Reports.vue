<template>
  <div>
    <el-card class="box-card">
      <div>
        <div id="main"></div>
        <div id="main1"></div>
        <div id="main2"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
    return {}
  },
  methods: {
    /**获取列表数据 */
    getlist() {}
  },
  created() {},
  mounted() {
    var chartDom = document.getElementById("main")
    var myChart = echarts.init(chartDom)
    var option
    option = {
      title: {
        text: "用户来源"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      legend: {
        data: ["华东", "华南", "华北", "西部", "其他"]
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["2017-12-27", "2017-12-28", "2017-12-29", "2017-12-30", "2017-12-31", "2018-1-1"]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "华东",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [2999, 3111, 4100, 3565, 3528, 6000]
        },
        {
          name: "华南",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [5090, 2500, 3400, 6000, 6400, 7800]
        },
        {
          name: "华北",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [6888, 4000, 8010, 12321, 13928, 12984]
        },
        {
          name: "西部",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [9991, 4130, 7777, 12903, 13098, 14028]
        },
        {
          name: "其他",
          type: "line",
          stack: "Total",
          label: {
            show: true,
            position: "top"
          },
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [15212, 5800, 10241, 14821, 15982, 14091]
        }
      ]
    }
    option && myChart.setOption(option)
    var chartDom1 = document.getElementById("main1")
    var myChart1 = echarts.init(chartDom1)
    var option1
    option1 = {
      title: {
        text: "用户来源",
        // subtext: "Fake Data",
        left: "center"
      },
      tooltip: {
        trigger: "item"
      },
      legend: {
        orient: "vertical",
        left: "left"
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "华东" },
            { value: 735, name: "华南" },
            { value: 580, name: "华北" },
            { value: 484, name: "西部" },
            { value: 300, name: "其他" }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    }
    option1 && myChart1.setOption(option1)
    var chartDom2 = document.getElementById("main2")
    var myChart2 = echarts.init(chartDom2)
    var option2
    option2 = {
      xAxis: {
        type: "category",
				data: ["华东", "华南", "华北", "西部", "其他"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [15212, 5800, 10241, 14821, 15982, 14091],
          type: "bar"
        }
      ]
    }
    option2 && myChart2.setOption(option2)
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
#main,
#main1,
#main2 {
  width: 1000px;
  height: 500px;
}
</style>
