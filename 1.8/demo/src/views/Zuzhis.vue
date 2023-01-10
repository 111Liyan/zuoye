<template>
	<div>
		<p>组织架构</p>
		<el-card class="box-card">
    <div>
				 <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
  				  <el-tab-pane label="组织结构" name="first">

								<div class="custom-tree-container">

		<p><el-icon><Shop /></el-icon>江苏传智播客教育科技股份有限公司</p>
    <el-tree
      :data="dataSource"

      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">

          <span><el-icon><UserFilled /></el-icon>{{ node.label }}</span>
          <span>
            <a style="margin-left: 8px" @click="remove(node, data)"> 操作<el-icon><ArrowDown /></el-icon> </a>
          </span>
        </span>
      </template>
    </el-tree>
  </div>

						</el-tab-pane>
  			 </el-tabs>



		</div>
  </el-card>


	</div>
</template>




<script lang="ts" setup>
import { ref } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import { ArrowDown,Shop,UserFilled} from '@element-plus/icons-vue'
import type { TabsPaneContext } from 'element-plus'
interface Tree {
  id: number
  label: string
  children?: Tree[]
}
let id = 1000
const append = (data: Tree) => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  dataSource.value = [...dataSource.value]
}
const renderContent = (
  h,
  {
    node,
    data,
    store,
  }: {
    node: Node
    data: Tree
    store: Node['store']
  }
) => {
  return h(
    'span',
    {
      class: 'custom-tree-node',
    },
    h('span', null, node.label),
    h(
      'span',
      null,
      h(
        'a',
        {
          onClick: () => append(data),
        },
        'Append '
      ),
      h(
        'a',
        {
          style: 'margin-left: 8px',
          onClick: () => remove(node, data),
        },
        'Delete'
      )
    )
  )
}
const dataSource = ref<Tree[]>([
  {
    id: 1,
    label: '总裁办',
  },
  {
    id: 2,
    label: '行政部',
  },
  {
    id: 3,
    label: '人事部',
  },
  {
    id: 4,
    label: '财务部',
    children: [
      {
        id: 7,
        label: '财务核算部',
      },
      {
        id: 8,
        label: '税务管理部',
      },
      {
        id: 9,
        label: '工资管理部',
      },
    ],
  },
	{
    id: 5,
    label: '技术部',
    children: [
      {
        id: 7,
        label: 'java研发部',
      },
      {
        id: 8,
        label: 'Python研发部',
      },
      {
        id: 9,
        label: 'Php研发部',
      },
    ],
  },
	{
    id: 6,
    label: '运营部',
  },
	{
    id: 7,
    label: '市场部',
		children: [
      {
        id: 7,
        label: '北京事业部',
      },
      {
        id: 8,
        label: '上海事业部',
      },
    ],
  },
])
const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.custom-tree-container{
	margin-top: 20px;
}
</style>