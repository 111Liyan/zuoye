<template>
	<div class="author">
		<!-- 头部 -->
		<el-card class="box-card">
			<el-button class="bth" type="primary" @click="add">添加权限</el-button>
</el-card>
<!-- 表格 -->
<el-table
        :data="tableData"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="name" label="名称" width="350" align="center">
        </el-table-column>
        <el-table-column prop="code" label="标识" width="340" align="center">
        </el-table-column>
        <el-table-column
          prop="description"
          label="描述"
          width="300"
          align="center"
        >
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="300" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="authorityAdd(scope.row.id)"
              >添加</el-button
            >
            <el-button
              type="text"
              size="small"
              @click="authorityEdit(scope.row)"
              >编辑</el-button
            >
            <el-button type="text" size="small" @click="authorityDel(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
<!-- 新增权限点 -->
	<el-dialog :title="title" :rules="rules" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="权限名称">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="权限标识">
      <el-input v-model="form.code" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="权限描述">
      <el-input v-model="form.description" autocomplete="off"></el-input>
    </el-form-item>
		<el-form-item label="开启">
          <el-switch v-model="form.enVisible"></el-switch>
        </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
	</div>
</template>
<script>
import {getAuthor,getAuthorsd,getAuest,getAuts} from "../../Api/Author"
import {STATUS} from "../../unlits/Status"
export default {
	data() {
		return {
			// 表格
			tableData:[],
			// 对话框的显示与隐藏
			dialogFormVisible:false,
			// 是否是添加与编辑
			title:'新增权限点',

			form:{
				name:'',
				code:"",
				description:"",
				enVisible:0
			},

			rules:{
				name: [
            { required: true, message: '请输入权限名称', trigger: 'blur' }
          ],
				code: [
            { required: true, message: '请输入权限标识', trigger: 'blur' }
          ],
					description: [
            { required: true, message: '请输入权限描述', trigger: 'blur' }
          ],
			},
			// 是添加还是编辑
			editid: 0,
		}
	},
created() {
	this.author()
},
methods:{
	author(){
		getAuthor().then((res)=>{
			console.log(res);
	    if (res.status == STATUS.SUCCESS) {
          // this.tableData = res.data.data;
          /**最终要产出的树状数据的数组 */
          const treeList = [];
          /**所有项都是用对象存储起来 */
          const map = {};
          /**建立一个映射：通过id快速找到对应的元素 */
          res.data.data.forEach((item) => {
            if (!item.children) {
              item.children = [];
            }
            map[item.id] = item;
          });
          res.data.data.forEach((item) => {
            /**
             * 对象每一个元素来说,先找它的上级
             * 如果能找到,说明他有上级,则要把它添加到上级的children中去
             * 如果找不到,说明它没有上级,就直接添加到treeList
             */
            const parent = map[item.pid];
            /**如果存在则表示item不是最顶层的数据 */
            if (parent) {
              parent.children.push(item);
            } else {
              /**如果不存在  则是顶层数据 */
              treeList.push(item);
            }
            // console.log(treeList);
            this.tableData = treeList;
          });
        }
		})
	},
	// 添加
	add(){
		this.dialogFormVisible=true
		this.editid = -1;
      this.title = "新增权限点";
      this.form1 = {
        name: "",
        code: "",
        description: "",
        enVisible: 0,
      };
	},
	// 添加子权限
	authorityAdd(id) {
      this.id = id;
      this.editid = -2;
      this.dialogFormVisible = true;
      this.title = "新增权限点";
      this.form1 = {
        name: "",
        code: "",
        description: "",
        enVisible: 0,
      };
    },
		// 编辑
	authorityEdit(row) {
      this.editid = row.id;
      this.title = "编辑权限点";
      this.form1.name = row.name;
      this.form1.code = row.code;
      this.form1.description = row.description;
      this.form1.enVisible = row.enVisible;
      this.dialogFormVisible = true;
    },
    /**新增编辑角色确定对话框 */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.editid == -1) {
            getAuts({
              name: this.form1.name,
              code: this.form1.code,
              description: this.form1.description,
              type: 1,
            }).then((res) => {
              if (res.status == STATUS.SUCCESS) {
                this.$message({
                  message: "操作成功",
                  type: "success",
                });
                this.authority();
                this.dialogFormVisible = false;
                this.form1 = {
                  name: "",
                  code: "",
                  description: "",
                  enVisible: 0,
                };
              }
            });
          } else if (this.editid == -2) {
            getAuthorsd({
              name: this.form1.name,
              code: this.form1.code,
              description: this.form1.description,
              pid: this.id,
              type: 2,
            }).then((res) => {
              // console.log(res);
              if (res.status == STATUS.SUCCESS) {
                this.$message({
                  message: "操作成功",
                  type: "success",
                });
                this.authority();
                this.dialogFormVisible = false;
                this.form1 = {
                  name: "",
                  code: "",
                  description: "",
                  enVisible: 0,
                };
              }
            });
          } else {
            getAuts({
              name: this.form1.name,
              code: this.form1.code,
              description: this.form1.description,
              id: this.editid,
            }).then((res) => {
              // console.log(res);
              if (res.status == STATUS.SUCCESS) {
                this.$message({
                  message: "操作成功",
                  type: "success",
                });
                this.authority();
                this.dialogFormVisible = false;
                this.form1 = {
                  name: "",
                  code: "",
                  description: "",
                  enVisible: 0,
                };
              }
            });
          }
        } else {
          return false;
        }
      });
    },
// 删除
		authorityDel(id){
			this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          getAuest(id).then((res) => {
            // console.log(res);
            if (res.status == STATUS.SUCCESS) {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.getAuthor();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
		},
}
}
</script>
<style lang="scss" scoped>

.box-card{
	margin: 10px;
	position: relative;
	height: 70px;
	.bth{
		position: absolute;
		right: 10px;
	}
}
</style>


