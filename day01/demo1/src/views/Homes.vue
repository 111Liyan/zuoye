<template>
	<div class="homes">
		<!-- 头部 -->
		<div class="homepage">
      <div class="left">
				<img
        :src="img"
        alt=""
        style="
          width: 110px;
          height: 110px;
          margin: 0 10px 0 20px;
          border-radius: 50%;
        "
      />
      </div>
      <div class="right">
				<p style="font-size: 25px">早安{{ username }}，祝你开心每一天!</p>
        <p style="font-size: 20px; color: #948c8d; margin-top: 10px">
          {{ username }} | {{ companyName }}-{{ departmentName }}
        </p>
      </div>
    </div>
		<div class="app">
		<div class="leth">
			<!-- 工作日历 -->
			<div class="calendar">
          <h3>工作日历</h3>
          <div class="select">
						<el-calendar v-model="value">
</el-calendar>
          </div>
		</div>
		<div class="Notice">
			<!-- 公告 -->
          <h4>公告</h4>
          <ul>
            <li>
              <div class="left">
                <img src="../../public/Apple.png" alt="" />
              </div>
              <div class="right">
                <div class="box">
                  <span class="color">朱继柳</span>
                  <span>发布了第一期"传智大讲堂"互动讨论获奖名单公布</span>
                </div>
                <span>2018-07-21 15:21:38</span>
              </div>
            </li>
            <li>
              <div class="left">
                <img src="../../public/Apple.png" alt="" />
              </div>
              <div class="right">
                <div class="box">
                  <span class="color">朱继柳</span>
                  <span>发布了第一期"传智大讲堂"互动讨论获奖名单公布</span>
                </div>
                <span>2018-07-21 15:21:38</span>
              </div>
            </li>
            <li>
              <div class="left">
                <img src="../../public/Apple.png" alt="" />
              </div>
              <div class="right">
                <div class="box">
                  <span class="color">朱继柳</span>
                  <span>发布了第一期"传智大讲堂"互动讨论获奖名单公布</span>
                </div>
                <span>2018-07-21 15:21:38</span>
              </div>
            </li>
          </ul>
        </div>
        </div>
				<!-- 右边 -->
				<div class="right">
					<div class="process">
          <h3>流程申请</h3>
          <div class="br"></div>
          <div class="box">
            <ul>
              <li>加班离职</li>
              <li>请假调休</li>
              <li>审批列表</li>
              <li>我的信息</li>
            </ul>
          </div>
        </div>
				<!-- 绩效指数 -->
				<div class="navigation">
          <h3>绩效指数</h3>
          <div class="br"></div>
          <div id="main"></div>
        </div>
				<!-- 帮助链接 -->
				<div class="Helplink">
          <h3>帮助链接</h3>
          <div class="br"></div>
          <div class="boxs">
            <ul>
              <li><img src="../../public/url1.png" alt="" /></li>
              <li><img src="../../public/url2.png" alt="" /></li>
              <li><img src="../../public/url3.png" alt="" /></li>
            </ul>
          </div>
        </div>
				</div>
		</div>
	</div>
</template>
<script>
import {IndexGet} from "../../Api/Index"
import * as echarts from 'echarts';
import {STATUS} from "../../unlits/Status"
  export default {
    data() {
      return {
        value: new Date(),
				img: "",
      /**姓名动态展示 */
      username: "",
      /**部门动态 */
      companyName: "",
      departmentName: "",
      }
    },
		mounted() {
			// 图表
			var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: '人力资源基础绩效表'
  },
  // legend: {
  //   data: ['Allocated Budget', 'Actual Spending']
  // },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: '考勤', max: 6500 },
      { name: '工资', max: 16000 },
      { name: '社保', max: 30000 },
      { name: '工作效率', max: 38000 },
      { name: '知识分享', max: 52000 },
      { name: '代码行数', max: 25000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
};

option && myChart.setOption(option);
IndexGet().then((res) => {
      // console.log(res);
      if (res.status == STATUS.SUCCESS) {
        this.img = res.data.data.staffPhoto;
        this.username = res.data.data.username;
        this.companyName = res.data.data.companyName;
        this.departmentName = res.data.data.departmentName;
      }
			})
		},


  }
</script>
<style lang="scss" scoped>
.homepage {
  height: 120px;
  background-color: #fff;
  margin: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  .left {
    img {
      width: 80px;
      height: 80px;
			border-radius: 50%
    }
  }
  .right {
    margin-left: 15px;
    h3 {
      margin: 6px 0;
      font-weight: normal;
    }
    span {
      color: #aaa;
    }
  }
}
.app {
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  .leth {
    width: 54%;
		.Notice {
  width: 100%;
  height: 260px;
  background-color: #fff;
  margin: 10px 0;
  padding: 15px;
  box-sizing: border-box;
  h4 {
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
}
  }
  .right {
    width: 45%;
  }
}
ul {
	list-style: none;
  li {
    display: flex;
    align-items: center;
    padding: 6px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    .left {
      img {
        width: 50px;
        height: 50px;
      }
    }
    .right {
      font-size: 12px;
      .box {
        margin-bottom: 4px;
        .color {
          color: #8aa4f9;
        }
      }
    }
  }
}
.process {
  width: 100%;
  height: 186px;
  background-color: #fff;
  padding: 10px;
  h3 {
    margin: 0;
    font-weight: normal;
  }
  .br {
    width: 80px;
    height: 3px;
    background-color: #8a97f8;
    margin-top: 4px;
  }
}
.box {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      padding: 10px 20px;
      border: 1px solid #ccc;
      margin: 20px 10px 0 20px;
      border-radius: 5px;
      font-size: 14px;
      color: rgb(132, 132, 132);
    }
  }
}
.navigation {
  width: 100%;
  height: 506px;
  background-color: #fff;
  padding: 20px;
  margin-top: 10px;
  h3 {
    margin: 0;
    font-weight: normal;
  }
  // .br {
  //   width: 80px;
  //   height: 3px;
  //   background-color: #8a97f8;
  //   margin-top: 4px;
  // }
}
#main{
	width: 460px;
	height: 460px;
}
.Helplink {
  width: 100%;
  height: 206px;
  background-color: #fff;
  padding: 20px;
  margin-top: 10px;
  h3 {
    margin: 0;
    font-weight: normal;
  }
  .br {
    width: 80px;
    height: 3px;
    background-color: #8a97f8;
    margin-top: 4px;
  }
}
.boxs {
  margin: 10px 0 0 20px;
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    img {
      width: 90px;
      height: 90px;
    }
  }
}
</style>
