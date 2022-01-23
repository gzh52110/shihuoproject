const mysql = require("mysql");
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