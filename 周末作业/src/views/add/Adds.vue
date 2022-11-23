<template>
  <div>
    <p>选择食品种类</p>
    <div class="top">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="食品种类">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="嗯嗯" value="嗯嗯"></el-option>
            <el-option label="www" value="www"></el-option>
            <el-option label="烟熏香肠" value="烟熏香肠"></el-option>
            <el-option label="213" value="213"></el-option>
            <el-option label="123" value="123"></el-option>
            <el-option label="家用" value="家用"></el-option>
            <el-option label="sa" value="sa"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="添加食品种类" name="1">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="食品种类">
              <el-input v-model="form.lei"></el-input>
            </el-form-item>
            <el-form-item label="种类描述">
              <el-input v-model="form.miao"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">创建</el-button>
            </el-form-item>
          </el-form>
        </el-collapse-item>
      </el-collapse>
      <p>添加食品</p>
      <div class="top">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="店铺名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="食品活动">
            <el-input v-model="form.adderss"></el-input>
          </el-form-item>
          <el-form-item label="食品详情">
            <el-input v-model="form.tel"></el-input>
          </el-form-item>
          <el-form-item label="上传食品图片">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="食品特点">
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="食品规格">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="单规格" name="type"></el-checkbox>
              <el-checkbox label="多规格" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="配送费">
            <el-input-number
              v-model="form.num"
              @change="handleChange"
              :min="1"
              :max="10"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="起送价">
            <el-input-number
              v-model="form.nums"
              @change="handleChange"
              :min="1"
              :max="10"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认添加食品</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "",
      form: {
        region: "",
        lei: "",
        miao: "",
        name: "",
        adderss: "",
        tel: "",
        jie: "",
        sum: "",
        region: "",
        type: [],
        num: 1,
        nums: 1,
      },
      imageUrl: "",
      rules:{
        name: [{ required: true, message: "请输入店铺名称", trigger: "blur" }],
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleChange(value) {
        console.log(value);
      }
  },
};
</script>

<style lang="scss" scoped>
p {
  text-align: center;
}
.top {
  width: 400px;
  margin: auto;
  border: 1px solid #eaeefb;
  padding: 10px;
}
</style>
