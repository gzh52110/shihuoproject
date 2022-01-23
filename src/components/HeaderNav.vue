<template>
  <div>
    <el-menu
    text-color="#fff"
  active-text-color="#ffd04b"
   :default-active="active"
    class="el-menu-demo" 
    mode="horizontal" 
    background-color="#545c64"
    router>

     <el-submenu 
     :index="item.path"
     v-for="item,index in navArr"
     :key="item.name"
     >
    <template slot="title" 
    >{{item.name}}</template>
    <el-menu-item 
    v-for="item in navArr[index].children"
    :key="item.name"
    :index="item.path"
    >{{item.name}}</el-menu-item>
    <!-- <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item> -->
  </el-submenu>
        <!-- <el-menu-item 
        v-for="item in navArr"
        :key="item.name"
        :index="item.path">
        {{item.name}}
        </el-menu-item> -->
        <!-- <el-menu-item index="/product">商品管理</el-menu-item>
        <el-menu-item index="/params">规格参数</el-menu-item>
        <el-menu-item index="/ad">广告管理</el-menu-item> -->
        <el-menu-item class="user">
          <span style="font-size:12px;margin-right:15px;">欢迎你 {{username.username}}</span>
            <span class="user-name">iwen</span>
            <el-button @click="logoutHandle">退出</el-button>
        </el-menu-item>
    </el-menu>
    </div>
</template>

<script>
import { mapState,mapMutations } from "vuex"
export default {
data(){
    return{
       active:"/",
       username:"",
       navArr:[
  {
    path:"/",
    name: "首页",
    children:[
       {
         path:"/",
          name: "首页",
      },
    ]
  },
  {
    path:"/goods",
    name: "商品管理",
    children:[
      {
         path:"/goods",
    name: "商品管理",
      },
      {
        path:"/goods/add",
        name:"添加商品"
      },
      {
        path:"/goods/list",
        name:"商品列表"
      }
    ]
  },
  {
    path:"/order",
    name: "订单管理",
    children:[
       {
         path:"/order",
          name: "订单管理",
      },
    ]
  },
  {
    path:"/advertising",
    name: "广告管理",
    children:[
       {
         path:"/advertising",
          name: "广告管理",
      },
    ]
  },
  {
    path:"/role",
    name: "角色权限",
    children:[
       {
         path:"/role",
          name: "角色权限",
      },
    ]
  },
  {
    path:"/user",
    name: "用户管理",
    children:[
       {
         path:"/user",
          name: "用户管理",
      },
    ]
  },
]
    }
},
methods:{
    ...mapMutations("login",["setUser"]),
    logoutHandle(){
      this.setUser({})
      localStorage.removeItem("ego")
      this.$router.push("/login")
    }
},
computed:{
      ...mapState("login",["user"])

},
created(){
  this.username = JSON.parse(localStorage.getItem("ego"))
  // console.log("username",this.username.username);
}

}
</script>

<style lang="less" scoped>
    .user{
        float: right !important;
        margin-right: 20px !important;
        line-height: 60px;
        .user-name{
            color: #fff;
            margin-right: 10px;
            font-size: 15px;
            border: 1px solid #fff;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: inline-block;
            line-height: 40px;
            overflow: hidden;
        }
    }
</style>