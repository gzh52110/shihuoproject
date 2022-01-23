## 使用elemnt
- 编写注册登录页面
- https://element.eleme.cn/#/zh-CN/component/tabs

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
## 创建数据库

## 写接口
- index.js
    const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const router = require("./router")
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api",router)
app.listen(3000,()=>{
    console.log("server is running in port 3000");
})

- router.js


- config.js
  const mysql = require("mysql");
const client = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ego"
})

- const mysql = require("mysql");
const client = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"ego"
})
client.connect();
const sqlClient = (sql,arr,callback)=>{
    client.query(sql,(err,data)=>{
        if(err){
            console.log("数据库查询错误",err);
            return
        }
        callback(data)
    })  
}

module.exports = sqlClient