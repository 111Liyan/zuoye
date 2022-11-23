<template>
    <div>
        <p class="p">数据统计</p>
        <div class="top">
            <el-button type="warning"><p>当日数据</p></el-button>
            <el-button type="info"><p>1</p>新增用户</el-button>
            <el-button type="info"><p>0</p>新增订单</el-button>
            <el-button type="info"><p>8</p>新增管理员</el-button>
        </div>
        <div class="top">
            <el-button type="primary"><p>总数据</p></el-button>
            <el-button type="info"><p>69837</p>注册用户</el-button>
            <el-button type="info"><p>32676</p>订单</el-button>
            <el-button type="info"><p>124571</p>管理员</el-button>
        </div>
        走势图
        <div id="main" style="width: 600px;height:400px;"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    data() {
        return {
            
        }
    },
    mounted(){
        this.adds()
    },
    methods:{
        adds(){
            var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2022-11-14', '2022-11-16', '2022-11-18', '2022-11-20']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};

option && myChart.setOption(option);
        }
    }
}
</script>

 
<style lang="scss" scoped>
.p{
    height: 40px;
    font-size: 30px;
    text-align: center;
}
.top{
    display: flex;
    margin-top: 10px;
}
</style>


