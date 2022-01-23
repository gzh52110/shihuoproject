<template>
  <div>
       <div class="block">
    <el-pagination
      @size-change="changeSize"
      @current-change="changePage"
      :current-page="page"
      :page-sizes="[5, 10, 20, 25]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
    <el-table
      :data="tableData"
      style="padding: 0px 20px"
      width="100%"
      height="500"
    >
      <el-table-column type="selection"> </el-table-column>
      <el-table-column prop="id" label="商品编号"> </el-table-column>
      <el-table-column prop="imgUrl" label="图片"> 
          <template v-slot="{row}">
            <el-image :src="row.imgUrl" style="width:80px;height:80px;"></el-image>
          </template>
      </el-table-column>
      <el-table-column prop="price" label="价格"> </el-table-column>
      <el-table-column prop="title" label="描述"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="$router.push('/main/GoodsManage/edit/'+scope.id)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
// const axios = require("axios")
export default {
  name: "GoodsList",
  data() {
    return {
      tableData: [],
      page: 1,
      size: 15,
      total: 0, //控制是否加载完成
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
     await axios
        .get("http://localhost:7777/api/shoes",{
            params:{
                page:this.page,
                size:this.size
            }
        })
        .then((result) => {
        this.total = result.data.total
          this.tableData = result.data.shoes;
          console.log(this.tableData);

          // this.tableData = result.data.data.result
          // this.total = result.data.data.total
          // console.log(result);

        })
        .catch((err) => {
          console.log(err);
        });
    },
    async handleDelete(index) {
   await this.$confirm('是否确定删除？', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '删除',
          cancelButtonText: '取消'
        })
          .then(() => {
              this.tableData.splice(index,1)
            this.$message({
              type: 'info',
              message: '删除成功'
            });
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: '取消删除'
            })
          });
    },
    changeSize(size){
        this.size = size
        console.log(size);
        this.getData()
    },
    changePage(currentPage){
        this.page = currentPage
        this.getData()
    }
  },
};
</script>

<style></style>
