<template>
  <Header/>
  <div class="w-10/12 m-auto">
    <p class="my-8 pl-4 text-blue-400" >内容管理</p>
    <el-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
      <el-tab-pane label="我的动态">
        <!--  start  -->
        <el-table :data="filterTableData" style="width: 100%">
          <el-table-column label="日期" prop="date" />
          <el-table-column label="标题" prop="title" />
          <el-table-column align="right">
            <template #header>
              <el-input  size="small" placeholder="搜索" />
            </template>
            <template #default="scope">
              <el-button size="small"
              >编辑</el-button
              >
              <el-button
                  size="small"
                  type="danger"
              >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <!--   end   -->
      </el-tab-pane>
      <el-tab-pane label="我的招领">我的招领</el-tab-pane>
      <el-tab-pane label="我的闲置">我的闲置</el-tab-pane>
      <el-tab-pane label="我的订单">我的订单</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import Header from "../components/Header";
const tabPosition = 'left'
const filterTableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

</script>
<script>
export default {
  name: "ContentManagement",
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>