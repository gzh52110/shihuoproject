<template>
  <div>
      <div class="detail-wrap">
          <div class="detail-left">
              <div class="product-board">
                <img src="https://sh1.shihuocdn.cn/images/trade/new_logo_sh.png?20190318" alt="">
                <ul>
                    <router-link tag="li" active-class="active" :to="'/details/'+item.id" v-for="(item,index) in detailsNav" :key="index">
                     {{item.title}}
                    </router-link> 
                </ul>
              </div>
          </div>
          <div class="detail-right">
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            detailsNav:[
                {
                    title:"开放产品",
                    id:"openproduct",
                },
                {
                    title:"品牌营销",
                    id:"logo",
                },
                {
                    title:"使命必达",
                    id:"golife",
                },
                {
                    title:"勇攀高峰",
                    id:"heigh",
                },
            ]
        }
    }
}
</script>

<style>
.detail-wrap{
    width: 1200px;
    margin: 0 auto;
    /* overflow: hidden; */
    padding-top: 20px;
}
.detail-left{
    float: left;
    width: 200px;
    text-align: center;
}
.detail-right{
    float: right;
    width: 980px;
    margin-left: 20px;
   
}
.product-board{
    background-color: #fff;
    padding: 20px 0;
}
.product-board li{
    text-align: left;
    padding: 10px 15px;
    cursor: pointer;
}
.product-board li.active,
.product-board li:hover{
    background-color: #4fc08d;
    color: #fff;
}
.product-board li a{
    display: block;
}
.sales-board{
    background-color: #fff;
}
.sales-board-intro p{
    background-color: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
}
.sales-board-intro h2{
    font-size: 20px;
    padding: 20px;
}
.sales-board-form{
    padding:10px 20px;
    font-size: 14px;
}
.sales-board-line{
    clear: both;
    padding-bottom: 20px;
}
.sales-board-line-left{
    display: inline-block;
}
.sales-board-right{
    display: inline-block;
    width: 75%;
}
.sales-board-des{
    border-top: 20px solid #fff;
    background-color: #fff;
    padding: 15px 20px;
}
.sales-board-des p{
    line-height: 1.6;
}
.sales-board-des h2{
    font-size: 20px;
    padding-bottom: 15px;
}
.sales-board-des h3{
    font-size: 18px;
    font-weight: bold;
    padding: 20px;
}
.sales-board-des li{
    padding: 5px 0;
}
.sales-board-table{
    width: 100%;
    margin-top: 20px;
}
    .sales-board-table th{
        background-color: #4fc08d;
        color: #fff;
    }
    .sales-board-table td{
        border:1px solid  #f02f5f;
        padding: 15px;
    }
</style>