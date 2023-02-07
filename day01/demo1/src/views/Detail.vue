<template>
  <div>
    <div class="employees-detail-top">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="登录账户设置" name="first">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名" style="margin: 30px 0 0 130px">
              <el-input v-model="form.username" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="新密码" style="margin: 30px 0 0 130px">
              <el-input
                v-model="form.password"
                style="width: 300px"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="margin: 30px 0 0 130px"
                >更新</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="个人详情" name="second">
          <el-form ref="form1" :model="form" label-width="80px">
            <div
              style="
                display: flex;
                justify-content: space-between;
                width: 1200px;
              "
            >
              <el-form-item label="工号" style="margin: 30px 0 0 130px">
                <el-input
                  v-model="form1.workNumber"
                  style="width: 300px"
                ></el-input>
              </el-form-item>
              <el-form-item label="入职时间" style="margin: 30px 0 0 0px">
                <el-input
                  v-model="form1.username"
                  style="width: 300px"
                ></el-input>
              </el-form-item>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                width: 1200px;
              "
            >
              <el-form-item label="姓名" style="margin: 30px 0 0 130px">
                <el-input
                  v-model="form1.username"
                  style="width: 300px"
                ></el-input>
              </el-form-item>
              <el-form-item label="部门" style="margin: 30px 0 0 130px">
                <el-input
                  v-model="form1.password"
                  style="width: 300px"
                ></el-input>
              </el-form-item>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                width: 1200px;
              "
            >
              <el-form-item label="手机" style="margin: 30px 0 0 130px">
                <el-input
                  v-model="form1.password"
                  style="width: 500px"
                ></el-input>
              </el-form-item>
              <el-form-item label="聘用形式" style="margin: 30px 0 0 130px">
                <el-input
                  v-model="form1.password"
                  style="width: 300px"
                ></el-input>
              </el-form-item>
            </div>
            <el-form-item label="员工头像" style="margin: 30px 0 0 130px">
              <el-input
                v-model="form1.password"
                style="width: 500px"
              ></el-input>
            </el-form-item>
            <el-form-item style="margin: 30px 0 0 200px">
              <el-button type="primary">保存更新</el-button>
              <el-button>返回</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="岗位信息" name="fourth"> </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

/**引入封装的首页内容接口 */
import { staffIdGet } from "../../Api/Stats";
/**引入状态码 */
import { STATUS } from "../../unlits/Status";
export default {
  data() {
    return {
      /**tab栏切换 */
      activeName: "first",
      /**当前id */
      id: "",
      /**当前内容 */
      form: {
        username: "",
        password: "",
      },
      /**个人详情 */
      form1: {
        workNumber: "",
        username: "",
      },
    };
  },
  methods: {},
  created() {},
  mounted() {
    this.id = this.$route.query.id;
    /**一进页面请求内容 */
    staffIdGet(this.id).then((res) => {
      console.log(res);
      if (res.status == STATUS.SUCCESS) {
        this.form.username = res.data.data.username;
        this.form1.username = res.data.data.username;
        this.form.password = res.data.data.password;
        this.form1.workNumber = res.data.data.workNumber;
        this.form1.mobile = res.data.data.mobile;
      }
    });
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.employees-detail-top {
  width: 1460px;
  // height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin: 20px;
  .demo-tabs {
    margin: 30px 0 50px 50px;
  }
}
</style>
