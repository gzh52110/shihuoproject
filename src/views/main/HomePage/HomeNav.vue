<template>

          <div class="index-left-block">
              <h2>全部产品</h2>
              <div v-for="(product,index) in productList" :key="index">
                  <h3>{{product.title}}</h3>
                  <ul>
                      <li v-for="(item,index) in product.list" :key="index">
                          <a :href="item.url">
                              {{item.name}}
                          </a>
                          <span class="hot-tag" v-if="item.hot">
                              HOT
                          </span>
                      </li>
                  </ul>
              </div>
          </div>
     
</template>

<script>
export default {
    data(){
        return{
            productList:[
            {
                title:"潮衣类",
                list:[
                    {
                        id:1,
                        name:"运动短袖",
                        url:"http://www.shihuo.cn/#qk=daohang&order=1",
                        hot:true
                    },
                    {
                        id:2,
                        name:"夹克",
                        url:"http://www.shihuo.cn/#qk=daohang&order=1",
                        hot:false
                    },
                    {
                        id:3,
                        name:"衬衫",
                        url:"http://www.shihuo.cn/#qk=daohang&order=1",
                        hot:false
                    },
                    ]
            },
            {
                title:"鞋类",
                list:[
                    {
                        id:1,
                        name:"AJ",
                        url:"http://www.shihuo.cn/#qk=daohang&order=1",
                        hot:false
                    },
                    {
                        id:2,
                        name:"Nike",
                        url:"http://www.shihuo.cn/#qk=daohang&order=1",
                        hot:true
                    },
                    {
                        id:3,
                        name:"Decathlon",
                        url:"http://www.shihuo.cn/#qk=daohang&order=1",
                        hot:false
                    },
                    {
                        id:4,
                        name:"Anta",
                        url:"http://www.shihuo.cn/#qk=daohang&order=1",
                        hot:false
                    },
                    {
                        id:5,
                        name:"APL",
                        url:"http://www.shihuo.cn/#qk=daohang&order=1",
                        hot:true
                    },
                    {
                        id:6,
                        name:"Converse",
                        url:"http://www.shihuo.cn/#qk=daohang&order=1",
                        hot:false
                    },
                    ]
            },
            {
                title:"背包类",
                list:[
                    {
                        id:1,
                        name:"双肩包",
                        url:"http://www.shihuo.cn/#qk=daohang&order=1",
                        hot:true
                    },
                    {
                        id:2,
                        name:"单肩包",
                        url:"http://www.shihuo.cn/#qk=daohang&order=1",
                        hot:false
                    },
                    {
                        id:3,
                        name:"腰包",
                        url:"http://www.shihuo.cn/#qk=daohang&order=1",
                        hot:false
                    },
                    ]
            },
            ]
            
        }
    }
}
</script>

<style scoped lang="less">


    .index-left-block{
        margin: 15px;
        background-color: #fff;
        box-shadow: 0 0 1px #ddd;
    }
    .index-left-block .hr{
        margin-bottom: 20px;
        height: 1px;
        width: 100%;
        background-color: #ddd;
    }
    .index-left-block h2{
        background-color: #4fc08d;
        color: #fff;
        padding: 10px 15px;
        margin-bottom: 20px;
    }
    .index-left-block h2{
        background-color: #4fc08d;
        color: #fff;
        padding: 10px 15px;
        margin-bottom: 20px;
    }
    .index-left-block h3{
        padding: 0 15px 5px 15px;
        font-weight: bold;
        color: #222;
    }
    .index-left-block ul{
        padding: 10px 15px;
    }
    .index-left-block li{
        padding: 5px;
        a{
            color: #222;
        }
    }
    .index-board-list{
        overflow: hidden;
        margin-top: 15px;
    }
    .index-board-item{
        float: left;
        width: 400px;
        background-color: #fff;
        box-shadow: 0 0 1px #ddd;
        padding: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .index-board-item-inner{
        min-height: 125px;
        padding-left: 120px;
    }
    .index-board-item h2{
        font-size: 18px;
        font-weight: bold;
        color: #000;
        margin-bottom: 15px;
    }
    .line-last{
        margin-top: 0;
    }
    .index-board-button{
        margin-top: 20px;
    }
    .lastest-news{
        min-height: 350px;
    }
    .hot-tag{
        background-color: red;
        color: #fff;
    }
    .new-item{
        display: inline-block;
        width: 230px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .swiperimg{
        width: 100%;
        height: 350px;
    }
    .swiper-size{
        margin-top: 15px;
    }
    .button{
        background-color: #4fc08d;
        color: #fff;
        display: inline-block;
        padding: 10px 20px;
        cursor: pointer;
    }

</style>