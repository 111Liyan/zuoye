<template>
    <div class="analy">
      <h4>区域销售大盘环比分析</h4>
      <div class="box">
          <div class="top">
              <div class="null"></div>
              <div>城市订单量</div>
              <div> 店铺数</div>
              <div>接单骑手人数</div>
              <div>新店铺数量</div>
              <div>人均订单量</div>
          </div>
          <ul>
              <li>
                  <div class="cir"></div>
                  <div>武汉-5%</div>
                  <div class="green">武汉-5%</div>
                  <div>武汉-5%</div>
                  <div class="green">武汉-5%</div>
                  <div>武汉-15%</div>
              </li>
              <li class="color">
                  <div class="cir1"></div>
                  <div>南宁-5%</div>
                  <div class="green">南宁-5%</div>
                  <div>南宁-5%</div>
                  <div class="green">南宁-5%</div>
                  <div>南宁-15%</div>
              </li>
              <li  class="color">
                  <div class="cir1"></div>
                  <div>北京-5%</div>
                  <div class="green">北京-5%</div>
                  <div>北京-5%</div>
                  <div class="green">北京-5%</div>
                  <div>北京-15%</div>
              </li>
              <li>
                  <div class="cir"></div>
                  <div>上海-5%</div>
                  <div class="green">上海-5%</div>
                  <div>上海-5%</div>
                  <div class="green">上海-5%</div>
                  <div>上海-15%</div>
              </li>
              <li  class="color">
                  <div class="cir1"></div>
                  <div>广州-5%</div>
                  <div class="green">广州-5%</div>
                  <div>广州-5%</div>
                  <div class="green">广州-5%</div>
                  <div>广州-15%</div>
              </li>
              <li>
                  <div class="cir"></div>
                  <div>深圳-5%</div>
                  <div class="green">深圳-5%</div>
                  <div>深圳-5%</div>
                  <div class="green">深圳-5%</div>
                  <div>深圳-15%</div>
              </li>
              <li  class="color">
                  <div class="cir1"></div>
                  <div>南京-5%</div>
                  <div class="green">南京-5%</div>
                  <div>南京-5%</div>
                  <div class="green">南京-5%</div>
                  <div>南京-15%</div>
              </li>
              <li>
                  <div class="cir"></div>
                  <div>杭州-5%</div>
                  <div class="green">杭州-5%</div>
                  <div>杭州-5%</div>
                  <div class="green">杭州-5%</div>
                  <div>杭州-15%</div>
              </li>
              <li  class="color">
                  <div class="cir1"></div>
                  <div>合肥-5%</div>
                  <div class="green">合肥-5%</div>
                  <div>合肥-5%</div>
                  <div class="green">合肥-5%</div>
                  <div>合肥-15%</div>
              </li>
              <li>
                  <div class="cir"></div>
                  <div>济南-5%</div>
                  <div class="green">济南-5%</div>
                  <div>济南-5%</div>
                  <div class="green">济南-5%</div>
                  <div>济南-15%</div>
              </li>
              <li  class="color">
                  <div class="cir1"></div>
                  <div>太原-5%</div>
                  <div class="green">太原-5%</div>
                  <div>太原-5%</div>
                  <div class="green">太原-5%</div>
                  <div>太原-15%</div>
              </li>
              <li>
                  <div class="cir"></div>
                  <div>成都-5%</div>
                  <div class="green">成都-5%</div>
                  <div>成都-5%</div>
                  <div class="green">成都-5%</div>
                  <div>成都-15%</div>
              </li>
          </ul>
      </div>
   </div>
  </template>
  
  <script>
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
  
    },
    watch: {
  
    },
  }
  </script>
  
  <style lang='scss' scoped>
  .analy{
      width: 500px;
       height: 450px;
       background-color: #363636;
       overflow: hidden;
  }
  h4{
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      margin: 10px ;
  }
  .box{
    background-color: #272727;
  }
  .green{
      color: #829166;
  }
  .top{
      display: flex;
      height: 30px;
      width: 100%;
      font-size: 14px;
      // text-align: center;
      background-color: #595959;
     
      justify-content: space-around;
      align-items: center;
  }
  ul li{
      display: flex;
      width: 100%;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
  }
  .cir,.cir1{
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background-color: #325663;
      margin: 10px;
      margin-right: 0;
  }
  .cir1{
      background-color: #51784a;
  }
  .color{
      background-color: #363636;
  }
  .null{
       width: 10px;
      height: 10px;
       margin: 10px;
       margin-right: 0;
  }
  </style>
  
