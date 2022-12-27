<template>
  <div class="home">
   <div class="tops">
    <h2>互联网产业全球布局看板</h2>
   </div>
   <div class="box">
    <div class="left">
      <zong class="zong"></zong>
      <ages class="ages"></ages>
      <login class="ages"></login>
      <sage class="sage"></sage>
      <qishou class="rachs"></qishou>
      <rachs class="rachs"></rachs>
    </div>
    <div class="right">
     <top class="top"></top>
     <tcont class="tcont"></tcont>
     <div class="app">
      <div class="leths">
        <tdiwan class="tdiwan"></tdiwan>
        <lsdt class="lsdt"></lsdt>
        <lsert class="lsert"></lsert>
        <Lert class="Lert"></Lert>
      </div>
      <div class="rigth">
        <rsdet class="rsdet"></rsdet>
        <rchs class="rchs"></rchs>
      </div>
     </div>
    </div>
   </div>
  </div>
</template>

<script>
import zong from "../components/left/Zong.vue"
import ages from "../components/left/Ages.vue"
import login from "../components/left/Login.vue"
import qishou from "../components/left/Qishou.vue"
import rachs from "../components/left/Rachs.vue"
import sage from "../components/left/Sage.vue"
import top from "../components/right/Top.vue"
import tcont from "../components/right/Tcont.vue"
import tdiwan from "../components/right/Tdiwan.vue"
import lsdt from "../components/right/Lsdt.vue"
import lsert from "../components/right/Lsert.vue"
import Lert from "../components/right/Lert.vue"
import rsdet from "../components/right/Rsdet.vue"
import rchs from "../components/right/Rchs.vue"
export default {
  name: 'HomeView',
  components: {
    zong,
    ages,
    login,
    qishou,
    rachs,
    sage,
    top,
    tcont,
    tdiwan,
    lsdt,
    lsert,
    Lert,
    rsdet,
    rchs
  }
}
</script>
<style lang="scss" scoped>
.tops{
  height: 60px;
  background-color: #1c1c1c;
  text-align: center;
  color: #fff;
  line-height: 60px;
}
.box{
  display: flex;
 
  .left{
    width: 30%;
    background-color: #3b3c40;
    height: 100vh;
    padding: 5px;
    .zong{
      background-color: #424345;
      height: 120px;
    }
    .ages{
      margin-top: 5px;
      background-color: #2a2b2d;
      height: 100px;
    }
    .sage{
      margin-top: 5px;
      background-color: #2a2b2d;
      height: 90px;
    }
    .rachs{
      margin-top: 5px;
      background-color: #2a2b2d;
      height: 150px;
    }
  }
  .right{
    width: 70%;
    background-color: #1b1c1c;
    .top{
      height: 80px;
      background-color: #424345;
    }
    .tcont{
      height: 20px;
      background-color: #35383f;
    }
    .app{
      display: flex;
      width: 100%;
      .leths{
        width: 60%;
        .tdiwan{
          height: 250px;
          background-color: #424345;
        }
        .lsdt{
          height: 50px;
          background-color: #35383f;
        }
        .lsert{
          height: 150px;
          background-color: #424345;
        }
        .Lert{
          height: 100px;
          background-color: #424345;
        }
      }
      .rigth{
        width: 40%;
        .rsdet{
          height: 300px;
          background-color: #272727;
        }
        .rchs{
          height: 300px;
          background-color: #272727;
        }
      }
    }
  }
}
</style>

