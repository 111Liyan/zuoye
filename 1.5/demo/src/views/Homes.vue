<template>
  <div class="box">
    <!-- 顶部 -->
    <div class="homepage">
      <div class="left">
        <img src="../../public/touxiang.png" alt="" />
      </div>
      <div class="right">
        <h3>早安，没落容克贵族，祝您开心每一天！</h3>
        <span>没落容克贵族 | 传智播客-总裁办</span>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="con">
      <div class="con-left">
        <!-- 日历 -->
        <div class="calendar">
          <h3>工作日历</h3>
          <div class="select">
            <el-select v-model="value" placeholder="2023" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-select v-model="value" placeholder="1" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </div>
          <div>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="one" label="一" />
              <el-table-column prop="two" label="二" />
              <el-table-column prop="three" label="三" />
              <el-table-column prop="four" label="四" />
              <el-table-column prop="five" label="五" />
              <el-table-column prop="six" label="六" />
              <el-table-column prop="seven" label="日" />
            </el-table>
          </div>
        </div>
        <!-- 公告 -->
        <div class="Notice">
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
      <div class="con-right">
        <!-- 流程申请 -->
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
        <!-- 便捷导航 -->
        <div class="navigation">
          <h3>快速开始/便捷导航</h3>
          <div class="br"></div>
          <div class="app">
            <ul>
              <li>人事月报</li>
              <li>考勤查询</li>
              <li>考勤统计</li>
              <li>员工审核</li>
              <li>组织架构</li>
            </ul>
          </div>
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

<script lang="ts" setup>
import { ref } from 'vue'
const tableData = [
  {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7'
  },
  {
    one: '8',
    two: '9',
    three: '10',
    four: '11',
    five: '12',
    six: '13',
    seven: '14'
  },
  {
    one: '15',
    two: '16',
    three: '17',
    four: '18',
    five: '19',
    six: '20',
    seven: '21'
  },
  {
    one: '22',
    two: '23',
    three: '24',
    four: '25',
    five: '26',
    six: '27',
    seven: '28'
  },
  {
    one: '29',
    two: '30',
    three: '31'
  }
]

const options = [
  {
    value: '1',
    label: '2023'
  }
]
const value = ref('')
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
.con {
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  .con-left {
    width: 54%;
  }
  .con-right {
    width: 45%;
  }
}

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
ul {
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
  height: 206px;
  background-color: #fff;
  padding: 20px;
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
      padding: 10px 30px;
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
  height: 206px;
  background-color: #fff;
  padding: 20px;
  margin-top: 10px;
  h3 {
    margin: 0;
    font-weight: normal;
  }
  .br {
    width: 160px;
    height: 3px;
    background-color: #8a97f8;
    margin-top: 4px;
  }
}
.app {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      padding: 10px 30px;
      border: 1px solid #ccc;
      margin: 20px 10px 0 20px;
      border-radius: 5px;
      font-size: 14px;
      color: rgb(132, 132, 132);
    }
  }
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
