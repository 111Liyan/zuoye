<template>
  <div>
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="店铺名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="form.adderss"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="店铺简介">
        <el-input v-model="form.jie"></el-input>
      </el-form-item>
      <el-form-item label="店铺标语">
        <el-input v-model="form.sum"></el-input>
      </el-form-item>
      <el-form-item label="店铺分类">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="店铺特点">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="品牌保证" name="type"></el-checkbox>
          <el-checkbox label="蜂鸟专送" name="type"></el-checkbox>
          <el-checkbox label="新开店铺" name="type"></el-checkbox>
          <el-checkbox label="外卖保" name="type"></el-checkbox>
          <el-checkbox label="准时达" name="type"></el-checkbox>
          <el-checkbox label="开发票" name="type"></el-checkbox>
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
      <el-form-item label="营业时间">
        <el-time-select
          placeholder="起始时间"
          v-model="form.startTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
          }"
        >
        </el-time-select>
        <el-time-select
          placeholder="结束时间"
          v-model="form.endTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: startTime,
          }"
        >
        </el-time-select>
      </el-form-item>

      <el-form-item label="上传店铺头像">
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
      <el-form-item label="上传营业执照">
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
      <el-form-item label="上传餐饮服务许可证">
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
      <el-form-item label="优惠活动">
        <el-select v-model="form.yous" placeholder="满减优惠">
          <el-option label="满减优惠" value="满减优惠"></el-option>
          <el-option label="优惠大酬宾" value="优惠大酬宾"></el-option>
          <el-option label="新用户立减" value="新用户立减"></el-option>
          <el-option label="进店领券" value="进店领券"></el-option>
        </el-select>
      </el-form-item>
      <template>
          <el-table :data="tableDataa" style="width: 100%">
            <el-table-column prop="date" label="规格">
            </el-table-column>
            <el-table-column prop="date" label="包装费">
            </el-table-column>
            <el-table-column prop="date" label="价格">
            </el-table-column>
            <el-table-column label="操作">
            </el-table-column>
          </el-table>
        </template>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  created() {
    axios.post(`https://elm.cangdu.org/shopping/addShop`).then((res) => {
      console.log(res);
    });
  },
  data() {
    return {
      form: {
        // 名称 
        name: "",
        adderss: "",
        tel: "",
        jie: "",
        sum: "",
        region: "",
        type: [],
        num: 1,
        nums: 1,
        startTime: "",
        endTime: "",
        yous: "",
      },
      imageUrl: '',
      rules: {
        name: [{ required: true, message: "请输入店铺名称", trigger: "blur" }],
        adderss: [
          { required: true, message: "请输入详细地址", trigger: "blur" },
        ],
        tel: [{ required: true, message: "请输入联系电话", trigger: "blur" }],
      },
    };
  },
  methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
    },
    handleChange(value) {
        console.log(value);
      }
}
};
</script>
