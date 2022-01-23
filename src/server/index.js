const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const router = require("./router")
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api",router)
app.listen(7777,()=>{
    console.log("server is running in port 7777");
})