var Mock = require("mockjs")
var data = Mock.mock({
    'data|30':[{
        "id": "@id",//身份证
        "age|18-80":100,//年龄
        'name':'@cname',//名字
        'gender|1-2':true,//性别
        "address": "@county(true)",//模拟状态值,0,1,2,
        "has_buy|1": [0, 1],
    }]
})
module.exports =  data