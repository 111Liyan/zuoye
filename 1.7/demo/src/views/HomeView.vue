<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '50px' : '180px'" style="color='#fff'">
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA3CAYAAADezaKIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDMkFGRDdBQkYwNTdFODExODMxQ0RDRjMxQThGRUQ3NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNjNBNzBFOEJDQjkxMUU4OEQ0OERFQjFFQTNERTZCMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNjNBNzBFN0JDQjkxMUU4OEQ0OERFQjFFQTNERTZCMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjgyNDhlMWQtY2IzNC04ODQxLTliNjQtYjBlOTUzZWNhYTE2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMyQUZEN0FCRjA1N0U4MTE4MzFDRENGMzFBOEZFRDc3Ii8+IDwvcmRmOkRlc2Ny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"
            class="img"
            alt=""
          />
        </div>
        <el-menu default-active="/homes" class="el-menu-vertical-demo" router>
          <el-menu-item index="homes">
            <el-icon>
              <Location />
            </el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="zuzhis">
            <el-icon>
              <Printer />
            </el-icon>
            <span>组织架构</span>
          </el-menu-item>
          <el-menu-item index="gong">
            <el-icon><setting /></el-icon>
            <span>公司设置</span>
          </el-menu-item>
          <el-menu-item index="quan">
            <el-icon><setting /></el-icon>
            <span>权限设置</span>
          </el-menu-item>
          <el-menu-item index="shes">
            <el-icon>
              <Menu />
            </el-icon>
            <span>社保</span>
          </el-menu-item>
          <el-menu-item index="kaose">
            <el-icon>
              <Collection />
            </el-icon>
            <span>考勤</span>
          </el-menu-item>
          <el-menu-item index="gongsd">
            <el-icon>
              <FirstAidKit />
            </el-icon>
            <span>工资</span>
          </el-menu-item>
          <el-menu-item index="shens">
            <el-icon><setting /></el-icon>
            <span>审批</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="box">
            <el-icon
              style="line-height= '60px'"
              @click="isCollapse = !isCollapse"
            >
              <Operation />
            </el-icon>
            <h3>江苏传智播客教育科技股份有限公司</h3>
            <span>体验版</span>
          </div>
          <div class="right">
            <!-- 搜索 -->
            <div class="search">
              <el-icon><Search /></el-icon>
            </div>
            <div class="questionFilled">
              <el-icon><QuestionFilled /></el-icon>
            </div>
            <!-- 全屏 -->
            <div class="full">
              <el-icon @click="fullScreen"><Rank /></el-icon>
            </div>
            <!-- 下拉框 -->
            <el-dropdown>
              <span class="span">
                <div class="img"><img src="" alt="" /></div>
                管理员
                <el-icon>
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>首页</el-dropdown-item>
                  <el-dropdown-item @click="loginOut"
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {
  Location,
  Printer,
  Setting,
  Operation,
  Menu,
  Collection,
  FirstAidKit
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const isCollapse = ref(false)
</script>
<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  background-color: #4a7bfb;
  color: #fff;
  .img {
    text-align: center;
    // align-content: center;
  }
  .el-menu-vertical-demo {
    background-color: #4a7bfb;
    color: #fff;
  }

  .el-menu-item-group {
    background-color: #4a7bfb;
  }
}
.el-header {
  display: flex;
	justify-content: space-between;
  background-color: #4a7bfb;
  color: #fff;
  .box {
    display: flex;
    .ing {
      line-height: 60px;
    }
    h3 {
      line-height: 60px;
    }
    span {
      padding: 0 10px;
      height: 30px;
      background-color: #84a9fe;
      line-height: 30px;
      border-radius: 10px;
      margin-left: 15px;
      margin-top: 15px;
      font-size: 14px;
    }
  }
	.right {
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 20px;
  .span {
    color: #fff;
    display: flex;
    align-items: center;
    .img {
      width: 25px;
      height: 20px;
      border: 3px solid #fff;
      border-radius: 30px;
      margin-right: 6px;
      position: relative;
      overflow: hidden;
      img {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 3px;
        left: -0px;
      }
    }
  }
}
}
</style>
