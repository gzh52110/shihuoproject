
<template>
  <div>
    <el-table
      :data="userlistArr"
      style="padding: 0px 20px"
      width="100%"
      height="500"
        :row-class-name="tableRowClassName"
    >
      <el-table-column type="selection"> </el-table-column>
      <el-table-column prop="name" label="名字"> </el-table-column>
      <el-table-column prop="gender" label="性别"> 
      </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="id" label="身份证"> </el-table-column>
      <el-table-column prop="has_buy" label="是否购买"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
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
  name: "userList",
  data() {
    return {
      userlistArr: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex % 2==0) {
          return 'success-row';
        }
        return '';
      },
    async getData() {
     await axios
        .get("http://localhost:7777/api/userlist")
        .then((result) => {
          console.log(result);
          const userlist = result.data.userList.data
          // console.log(userlist);
          userlist.map(item=>{
              if(item.gender){
          item.gender="男"
        }
        item.gender="女"
        if(item.has_buy==0){
          item.has_buy = "未购买"
        }else if(item.has_buy==1){
          item.has_buy = "已购买"
        }else{
          item.has_buy = "未支付"
        }
       
          })
      this.userlistArr = userlist
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
              this.userlistArr.splice(index,1)
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
  },
};
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  </style>
