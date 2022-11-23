<template>
  <div>
    <el-table :data="getList" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item
              label="
            食品名称"
            >
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="餐馆名称">
              <span>{{ props.row.specfoods.name }}</span>
            </el-form-item>
            <el-form-item label="食品 ID">
              <span>{{ props.row.restaurant_id }}</span>
            </el-form-item>
            <el-form-item label="餐馆 ID">
              <span>{{ props.row.specfoods.restaurant_id }}</span>
            </el-form-item>
            <el-form-item label="食品介绍">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="食品评分">
              <span>{{ props.row.rating }}</span>
            </el-form-item>
            <el-form-item label="食品分类">
              <span>{{ props.row.attributes.icon_name }}</span>
            </el-form-item>
            <el-form-item label="月销量">
              <span>{{ props.row.month_sales }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="食品名称" prop="name"> </el-table-column>
      <el-table-column label="食品介绍" prop="description"> </el-table-column>
      <el-table-column label="评分" prop="rating"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="jib(scope.row)" 
            >编辑</el-button
          >
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleSizeChange"
      :current-page.sync="pageIndex"
      :page-sizes="[5, 7, 9, 11]"
      :page-size.sync="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="list.length"
    >
    </el-pagination>

    <el-dialog title="修改食品信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="食品名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="食品介绍">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="食品分类">
          <el-select v-model="form.value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="食品图片">
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
        <el-table :data="data" border style="width: 100%">
          <el-table-column fixed prop="date" label="规格">
          </el-table-column>
          <el-table-column prop="name" label="包装费">
          </el-table-column>
          <el-table-column prop="province" label="价格">
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      getList: [],
      pageIndex: 1,
      pageSize: 6,
      dialogFormVisible: false,
      form:{
        name:"",
        description:"",
        value:"",
        data:{},
      },
      imageUrl:'',
      options:[
        {
          label:'热销榜',
          value:'热销榜'
        },
        {
          label:'折扣榜',
          value:'折扣榜'
        },
        {
          label:'好吃的',
          value:'好吃的'
        },
        {
          label:'招牌',
          value:'招牌'
        },
        {
          label:'测试榜',
          value:'测试榜'
        }
      ],
      handleAvatarSuccess:'',
      beforeAvatarUpload:''
    };
  },
  created() {
    axios
      .get(
        "https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined"
      )
      .then((res) => {
        console.log(res);
        this.list = res.data;
        this.handleSizeChange();
      });
    this.getData();
  },
  methods: {
    handleSizeChange() {
      this.getList = this.list.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
    },
    jib(row) {
      this.dialogFormVisible = true;
      this.form={
        ...row
      }
      console.log(this.form.data);
    },
    getData() {
      axios.get(`https://elm.cangdu.org/shopping/v2/updatefood`).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
