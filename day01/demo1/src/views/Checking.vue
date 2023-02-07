<template>
	<div>
		<el-card class="box-card">
			<!-- 头部 -->
      <div class="box">
        <el-tag>有0条考勤审批未处理</el-tag>
        <div>
          <el-button type="danger" size="small">导入</el-button>
          <el-button type="warning" size="small">提醒</el-button>
          <el-button type="primary" size="small">设置</el-button>
          <el-button  size="small">历史归档</el-button>
          <el-button type="primary" size="small">202303报表</el-button>
        </div>
      </div>
		</el-card>
		<!-- 中间部分 -->
		<el-card class="box-card">
			<div class="box_top">
      <div class="box_conent">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="部门：">
            <el-checkbox-group v-model="form.type">
              <el-checkbox
                v-for="(item, index) in section"
                :key="index"
                :label="item.name"
                :name="item.id"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="考勤状态">
            <el-checkbox-group v-model="form.type1">
							<el-radio label="正常"></el-radio>
							<el-radio label="旷工"></el-radio>
							<el-radio label="事假"></el-radio>
							<el-radio label="调休"></el-radio>
							<el-radio label="迟到"></el-radio>
							<el-radio label="早退"></el-radio>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
      </div>
    </div>
		</el-card>
		<!-- 表格 -->
		<el-card class="box-card">
			<el-table
        :data="tableData"
        border
        style="width: 95%; margin: 20px 0 20px 20px"
      >
        <el-table-column type="index" label="序号" width="60">
        </el-table-column>
        <el-table-column prop="username" label="姓名" width="80" />
        <el-table-column prop="workNumber" label="工号" />
        <el-table-column prop="departmentName" label="部门" />
        <el-table-column prop="mobile" label="4/1">
          <template #default="scope">
            {{ scope.row.attendanceRecord[0].adtStatu == 1 ? "√" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 12 ? "产假" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 13 ? "奖励产假" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 19 ? "流产假" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 20 ? "长期病假" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[0].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/2">
          <template #default="scope">
            {{ scope.row.attendanceRecord[1].adtStatu == 1 ? "√" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 12 ? "产假" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 13 ? "奖励产假" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 19 ? "流产假" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 20 ? "长期病假" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[1].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/3">
          <template #default="scope">
            {{ scope.row.attendanceRecord[2].adtStatu == 1 ? "√" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 12 ? "产假" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 13 ? "奖励产假" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 19 ? "流产假" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 20 ? "长期病假" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[2].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/4">
          <template #default="scope">
            {{ scope.row.attendanceRecord[3].adtStatu == 1 ? "√" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 12 ? "产假" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 13 ? "奖励产假" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 19 ? "流产假" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 20 ? "长期病假" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[3].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/5">
          <template #default="scope">
            {{ scope.row.attendanceRecord[4].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 12 ? "产假" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 13 ? "奖励产假" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 19 ? "流产假" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 20 ? "长期病假" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[4].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/6">
          <template #default="scope">
            {{ scope.row.attendanceRecord[5].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 12 ? "产假" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 13 ? "奖励产假" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 19 ? "流产假" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 20 ? "长期病假" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[5].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/7">
          <template #default="scope">
            {{ scope.row.attendanceRecord[6].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 12 ? "产假" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 13 ? "奖励产假" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 19 ? "流产假" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 20 ? "长期病假" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[6].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/8">
          <template #default="scope">
            {{ scope.row.attendanceRecord[7].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 12 ? "产假" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 13 ? "奖励产假" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 19 ? "流产假" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 20 ? "长期病假" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[7].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/9">
          <template #default="scope">
            {{ scope.row.attendanceRecord[8].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 12 ? "产假" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 13 ? "奖励产假" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 19 ? "流产假" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 20 ? "长期病假" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[8].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/10">
          <template #default="scope">
            {{ scope.row.attendanceRecord[9].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 12 ? "产假" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 13 ? "奖励产假" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 19 ? "流产假" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 20 ? "长期病假" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[9].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/11">
          <template #default="scope">
            {{ scope.row.attendanceRecord[10].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[10].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[10].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[10].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[10].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[10].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/12">
          <template #default="scope">
            {{ scope.row.attendanceRecord[11].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[11].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[11].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[11].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[11].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[11].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/13">
          <template #default="scope">
            {{ scope.row.attendanceRecord[12].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[12].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[12].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[12].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[12].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[12].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/14">
          <template #default="scope">
            {{ scope.row.attendanceRecord[13].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[13].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[13].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[13].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[13].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[13].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/15">
          <template #default="scope">
            {{ scope.row.attendanceRecord[14].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[14].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[14].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[14].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[14].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[14].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/16">
          <template #default="scope">
            {{ scope.row.attendanceRecord[15].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[15].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[15].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[15].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[15].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[15].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/17">
          <template #default="scope">
            {{ scope.row.attendanceRecord[16].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[16].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[16].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[16].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[16].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[16].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/18">
          <template #default="scope">
            {{ scope.row.attendanceRecord[17].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[17].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[17].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[17].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[17].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[17].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/19">
          <template #default="scope">
            {{ scope.row.attendanceRecord[18].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[18].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[18].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[18].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[18].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[18].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/20">
          <template #default="scope">
            {{ scope.row.attendanceRecord[19].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[19].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[19].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[19].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[19].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[19].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/21">
          <template #default="scope">
            {{ scope.row.attendanceRecord[20].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[20].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[20].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[20].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[20].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[20].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/22">
          <template #default="scope">
            {{ scope.row.attendanceRecord[21].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[21].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[21].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[21].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[21].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[21].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/23">
          <template #default="scope">
            {{ scope.row.attendanceRecord[22].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[22].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[22].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[22].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[22].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[22].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/24">
          <template #default="scope">
            {{ scope.row.attendanceRecord[23].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[23].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[23].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[23].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[23].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[23].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/25">
          <template #default="scope">
            {{ scope.row.attendanceRecord[24].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[24].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[24].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[24].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[24].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[24].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/26">
          <template #default="scope">
            {{ scope.row.attendanceRecord[25].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[25].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[25].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[25].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[25].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[25].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/27">
          <template #default="scope">
            {{ scope.row.attendanceRecord[26].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[26].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[26].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[26].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[26].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[26].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/28">
          <template #default="scope">
            {{ scope.row.attendanceRecord[27].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[27].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[27].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[27].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[27].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[27].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/29">
          <template #default="scope">
            {{ scope.row.attendanceRecord[28].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[28].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[28].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[28].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[28].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[28].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/30">
          <template #default="scope">
            {{ scope.row.attendanceRecord[29].adtStatu == 1 ? "正常" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 2 ? "旷工" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 3 ? "迟到" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 4 ? "早退" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 5 ? "外出" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 6 ? "出差" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 7 ? "年假" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 8 ? "事假" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 9 ? "病假" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 10 ? "婚假" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 11 ? "丧假" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 12 ? "产假" : "" }}
            {{
              scope.row.attendanceRecord[29].adtStatu == 13 ? "奖励产假" : ""
            }}
            {{ scope.row.attendanceRecord[29].adtStatu == 14 ? "陪产假" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 15 ? "探亲假" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 16 ? "工伤假" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 17 ? "调休" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 18 ? "产检假" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 19 ? "流产假" : "" }}
            {{
              scope.row.attendanceRecord[29].adtStatu == 20 ? "长期病假" : ""
            }}
            {{ scope.row.attendanceRecord[29].adtStatu == 21 ? "测试假" : "" }}
            {{ scope.row.attendanceRecord[29].adtStatu == 22 ? "补签" : "" }}
          </template>
        </el-table-column>
      </el-table>
			<!-- 分页 -->
			<div class="app">
				<el-pagination
          @size-change="handleSizeChange"
          @current-change="handleSizeChange"
          :current-page.sync="query.page"
          :page-size.sync="query.pageSize"
          layout="prev, pager, next"
          :total="query.total"
          style="margin-bottom: 20px"
        >
        </el-pagination>
			</div>
		</el-card>
	</div>
</template>
<script>
import {STATUS} from "../../unlits/Status"
import { getDepartment , getAttendances } from "../../Api/Checking"
export default {
	data() {
		return {
			form:{
				type:'',
				type1:''
			},
			// 部门
			section:[],
			// 考勤状态
			city:[],
			// 分页
			query:{
				page:1,
				pageSize:6,
				total:0
			},
			// 表格
			tableData:[],

		}
	},
	mounted(){
		// 部门的接口
		this.department()
		// 表格的接口
		this.attendances()
	},
	methods:{
		department(){
			getDepartment().then(res=>{
				// console.log(res);
				if(res.status==STATUS.SUCCESS){
					this.section=res.data.data.depts
				}

			})
		},
		attendances(){
			getAttendances(this.query).then(res=>{
				console.log(res);
				if(res.status==STATUS.SUCCESS){
					this.tableData=res.data.data.data.rows
				}
			})
		},
		// 分页
		handleSizeChange(){
			this.attendances()
		}
	}
}
</script>
<style lang="scss" scoped>
.box-card{
	margin-top: 10px;
}
.box {
  display: flex;
  justify-content: space-between;

}

.box_top {
	width: 100%;
  margin: 20px;
  .box_conent {
    margin-top: 30px;
    margin-left: 10px;

  }
}

</style>

