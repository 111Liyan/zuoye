<template>
    <!-- <div> -->
      <div class="order">
        <div class="left">
          <div>实时订单趋势图</div>
          <div class="eng"> Number of orders</div>
          <div class="num">23,242</div>
          <div class="font">周同出增长率</div>
          <div class="color">2.32%</div>
        </div>
        <div class="right">
        <div>
            <div id="main2"></div>
        </div>
        <div>
          <img src="../../assets/18.png" alt="" class="footer">
        </div>
        </div>
      </div>
   <!-- </div> -->
  </template>
  
  <script>
  import * as echarts from 'echarts';
  export default {
    components: {
    },
    computed: {
    },
    data () {
      return {
      }
    },
    created () {
    },
    methods: {
    },
    mounted () {
  var chartDom2 = document.getElementById('main2');
  var myChart2 = echarts.init(chartDom2);
  var option;
  option = {
      grid:{
         //与绝对定位相似，top，left，right，bottom 设定是根据上级盒子宽高来计算
          top:"10%",
          left:"10%",
          right:"20%",
          bottom:"30%"
      },
    xAxis: {
      type: 'category',
      data: ['13:53:34', '13:53:43', '13:53:53', '13:54:2', '13:54:12', '13:54:22', '13:54:32','13:54:42','13:54:53','13:55:4','13:55:13','13:55:23','13:55:32','13:55:42']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  };
  option && myChart2.setOption(option);
    },
    watch: {
    },
  }
  </script>
  
  <style lang='scss' scoped>
  .order{
    width: 100%;
    height: 150px;
    display: flex;
    color: #fff;
    background-color: #424345;
    padding: 5px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-around;
    .left{
      width: 20%;
      text-align: center;
    }
    .right{
      width: 80%;
      height: 150px;
    }
  }
  #main2{
    width: 100%;
    height: 142px;
  }
  .num{
    font-size: 30px;
  }
  .eng{
    margin: 5px  0 10px 0;
  }
  .color{
    color: #b7ce86;
  }
  .footer{
    width: 70%;
    height: 10px;
    margin-bottom: 5px;
    // text-align: right;
  }
  </style>
