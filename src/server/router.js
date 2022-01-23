const express = require("express")
const router = express.Router()
const sqlClient = require("./config")
const jwt = require("jsonwebtoken")
const url = require("url")
const shoes = require("./data/shoes")
const bag = require("./data/bag")
const clothes = require("./data/clothes")
const shuma = require("./data/shuma")
const userList = require("./mock/userList")
// 注册
router.post("/register",(req,res)=>{
    const { username,password,email } = req.body
    console.log(username,password,email);
    //  `INSERT INTO car VALUES(${null},'${username}','${goods_id}','1')`
    const sql = `INSERT INTO user VALUES(${null},'${username}','${password}','${email}')`
    // const sql = "insert into user values(null,?,?,?)"; 
    const arr = [ username,password,email]
    sqlClient(sql,arr,result=>{
        if(result.affectedRows>0){
            res.send({
                status:200,
                result
            })
        }else{
             res.send({
            status:401,
            msg:"注册失败"
        })
        }
       
    })
})

// 登录
router.post("/login",(req,res)=>{
    const { username,password } = req.body
    const checkSQL = `SELECT * FROM user WHERE username='${username}' and password='${password}'`
    const arr = [username,password]
    sqlClient(checkSQL,arr,result=>{
        if(result.length>0){
            let token = jwt.sign({
                username,
                id:result[0].id
            },'soomekeys')

            res.send({
                status:200, 
                token,
                username
            })
        }else{
             res.send({
            status:401,
            msg:"登录失败"
        })
        }
    })
})

router.get("/backend/item/selectTbItemAllByPage",(req,res)=>{
   const page = url.parse(req.url,true).query.page || 1
   const sql = "select * from project order by id desc limit 10 offset " + (page - 1) * 10
    sqlClient(sql,null,result =>{
        if(result.length > 0){
            res.send({
                status:200,
                result
            })
        }else{
            res.send({
                status:401,
                msg:"暂无数据"
            })
        }
    })
})

router.get("/shoes",(req,res)=>{
    const {page=1,size=10} = req.query
    // const limit = Number(size)
    // const skip = (page - 1)*size
    // try{
    //     const result = 
      
    // }catch{

    // }
    // const total = shoes.filter((ele)=>{
    //     return ele.index > size
    // })
    // console.log(total);
    
      res.send(
          {
              code:200,
            total:shoes.length,
            shoes,
            page,
            size
        })
})
router.get("/shuma",(req,res)=>{
    // const {page=1,size=10,sort} = req.query
    // const limit = Number(size)
    // const skip = (page - 1)*size
    // try{
    //     const result = 
      
    // }catch{

    // }
      res.send(shuma)
})
router.get("/clothes",(req,res)=>{
    // const {username,password,email} = req.query
  /*   if(username==undefined||password==undefined||username==email){
        res.send({
            state:404,
            msg:"请先登录账户才可以看商品"
        })
    }
    // console.log(username,password,email);
    // console.log(goods);
    // console.log(req); */
    res.send(clothes)
})
router.get("/bag",(req,res)=>{
    // const {username,password,email} = req.query
  /*   if(username==undefined||password==undefined||username==email){
        res.send({
            state:404,
            msg:"请先登录账户才可以看商品"
        })
    }
    // console.log(username,password,email);
    // console.log(goods);
    // console.log(req); */
    res.send(bag)
})

router.get("/userlist",(req,res)=>{
    res.send(
        {
            state:200,
            userList
        })
})

console.log(userList);

module.exports = router 