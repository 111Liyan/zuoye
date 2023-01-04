<template>
    <div class="reg">
      <div>
        <h4>地区商家销售排行</h4>
        <div class="bottom">
          <div class="footer">
            <div class="bg">
              <p>合肥</p>
              <div class="big"><div class="small"></div></div>
              <img src="../../assets/15.png" alt="" />
              <div class="top">
                <div>商家</div>
                <div>订单数</div>
                <div>销售额</div>
              </div>
            </div>
            <ul>
              <li>
                <div>必胜客</div>
                <div>886</div>
                <div>14399</div>
              </li>
              <li>
                <div>肯德基</div>
                <div>886</div>
                <div>14399</div>
              </li>
              <li>
                <div>麦当劳</div>
                <div>886</div>
                <div>14399</div>
              </li>
            </ul>
          </div>
          <div class="footer">
            <div class="bg">
              <p>济南</p>
              <div class="big"><div class="small"></div></div>
              <img src="../../assets/15.png" alt="" />
              <div class="top">
                <div>商家</div>
                <div>订单数</div>
                <div>销售额</div>
              </div>
            </div>
            <ul>
              <li>
                <div>必胜客</div>
                <div>886</div>
                <div>14399</div>
              </li>
              <li>
                <div>肯德基</div>
                <div>886</div>
                <div>14399</div>
              </li>
              <li>
                <div>麦当劳</div>
                <div>886</div>
                <div>14399</div>
              </li>
            </ul>
          </div>
          <div class="footer">
            <div class="bg">
              <p>太原</p>
              <div class="big"><div class="small"></div></div>
              <img src="../../assets/15.png" alt="" />
              <div class="top">
                <div>商家</div>
                <div>订单数</div>
                <div>销售额</div>
              </div>
            </div>
            <ul>
              <li>
                <div>必胜客</div>
                <div>886</div>
                <div>14399</div>
              </li>
              <li>
                <div>肯德基</div>
                <div>886</div>
                <div>14399</div>
              </li>
              <li>
                <div>麦当劳</div>
                <div>886</div>
                <div>14399</div>
              </li>
            </ul>
          </div>
        </div>
    </div>
    </div>
  </template>
  
   <script>
  export default {
    components: {},
    computed: {},
    data() {
      return {};
    },
    created() {},
    methods: {},
    mounted() {},
    watch: {},
  };
  </script>
  
  <style lang="scss" scoped>
  .reg {
    width: 450px;
  }
  .bottom {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 10px;
    .footer {
      width: 100%;
      flex: 1;
      margin: 5px;
    }
  }
  h4{
      margin: 5px 0 0 10px;
  }
  p{
      margin: 5px;
      text-align: left;
      font-size: 14px;
  }
  .reg {
    width: 510px;
    height: 285px;
     overflow: hidden;
    margin: 5px;
    background-color: #363636;
  }
  .big {
    width: 100%;
    height: 15px;
    background-color: #5c5c5c;
    .small {
      width: 10px;
      height: 10px;
     float: right;
       margin: 2px ;
      line-height: 15px;
      background-color: #313131;
    }
  }
  .bg{
      background-color: #2c2c2c;
  }
  .top{
      display: flex;
      justify-content: center;
      font-size: 14px;
      div{
          flex: 1;
      }
  }
  img{
      margin: 5px 0;
  }
  ul li{
      height: 25px;
      align-items: center;
      display: flex;
      justify-content: space-around;
      font-size: 12px;
      margin: 5px 0;
  }
  </style> 
  
