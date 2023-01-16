<template>
	<div class="homes">
		<div class="homepage">
      <div class="left">
        <img src="http://shuiruohanyu2-1302806742.cos.ap-chengdu.myqcloud.com/Snipaste_2023-01-10_21-09-29.png" alt="" />
      </div>
      <div class="right">
        <h3>早安，hello11，祝你开心每一天！</h3>
        <span>hello11 | 传智播客-总裁办</span>
      </div>
    </div>
		<div class="app">
		<div class="leth">
			<div class="calendar">
          <h3>工作日历</h3>
          <div class="select">
						<el-calendar :range="['2019-03-04', '2019-03-24']">
</el-calendar>
          </div>
		</div>
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
				</div>
		</div>
	</div>
</template>
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
</style>
