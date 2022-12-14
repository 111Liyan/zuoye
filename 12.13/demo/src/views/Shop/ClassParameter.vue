<template>
  <div>

    <el-card class="box-card">
      <div>
        <!-- 警告提示 -->
        <el-alert
          show-icon
          title="警告：只允许为第三级分类设置相关参数 alert"
          type="warning"
          effect="dark"
          :closable="false"
        >
        </el-alert>
        <!-- 警告提示 -->

        <!-- 级联选择器 -->
        <div class="block">
          <span class="demonstration">选择商品分类：</span>
          <el-cascader
            v-model="value"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
          ></el-cascader>
        </div>
        <!-- 级联选择器 -->

        <!-- 卡片化 -->
        <el-tabs type="border-card">
          <el-tab-pane label="动态参数">
            <!-- 添加参数按钮 -->
            <el-button type="primary" disabled size="mini">添加参数</el-button>
            <!-- 添加参数按钮 -->
          </el-tab-pane>
          <el-tab-pane label="静态属性">
            <!-- 添加属性按钮 -->
            <el-button type="primary" disabled size="mini">添加属性</el-button>
            <!-- 添加属性按钮 -->
          </el-tab-pane>

					<!-- 表格 -->
        <el-table :data="tableData" style="width: 100%" border :header-cell-style="{fontSize:'15px'}">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column type="index" label="#"> </el-table-column>
          <el-table-column label="参数名称" prop="name"> </el-table-column>
          <el-table-column label="操作" prop="desc"> </el-table-column>
        </el-table>
        <!-- 表格 -->
        </el-tabs>
        <!-- 卡片化 -->
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [], //级联选择器
			tableData:[],
    }
  },
  created() {
    this.$http({ method: 'get', url: '/api/categories' }).then((res) => {
      console.log(res)
      this.options = Array.from(res.data.data)
    })
  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  margin-top: 20px;
}
</style>
