<template>
  <div class="shoes">
      <!-- <div class="sales-board">
          <div class="sales-board-intro">
              <h2>流量分析</h2>
              <p>弄i啊世界第哦啊涉及到i松紧带送机动车弄i啊世界第哦啊涉及到i松紧带送机动车弄i啊世界第哦啊涉及到i松紧带送机动车弄i啊世界第哦啊涉及到i松紧带送机动车弄i啊世界第哦啊涉及到i松紧带送机动车</p>
          </div>
          <div class="sales-board-form-box">
            <div class="sales-board-form">
              <div class="sales-board-line-left">购买数量:</div>
              <div class="sales-board-line-right">
                  <Counter :counterObj="counterObj"/>
              </div>
              

          </div>
          <div class="sales-board-form">
              <div class="sales-board-line-left">产品类型:</div>
              <div class="sales-board-line-right">
                  <Types :selecterData="selecterData"/>
              </div>
              
          </div>
          <div class="sales-board-form">
              <div class="sales-board-line-left">有效时间:</div>
              <div class="sales-board-line-right">
                  <Timer :timerData="timerData"/>
              </div>
          </div>
          </div>
         
      </div> -->
   

  
  <ul class="list-ul">
      <li v-for="item in shoesGoods" :key="item.name">
          <div class="imgs_area">
              <div class="img">
                  <a class="link" href="http://m.shihuo.cn/sports/detail/311184.html?supplierId=&styleId=&img=&pid=#qk=list">
                  <img class="imgbox" :src="item.imgUrl">
                  </a>
              </div>
          </div>
          <div class="title">
              <a href="http://www.shihuo.cn/sports/detail/311184.html#qk=list" class="link" target="_blank">
              {{item.title}}
              </a>

          </div>
          <div class="price">
              <span>
                  <b>{{item.price}}</b>起
              </span>
          </div>
          <el-row style="margin-top:10px;">
  <el-button type="success" round size="small">添加</el-button>
</el-row>
      </li>
  </ul>
  </div>
</template>
<script>
 import Counter from '@/components/HomePage/counter'
 import Types from '@/components/HomePage/types'
 import Timer from '@/components/HomePage/timer'
import axios from 'axios'
export default {
   data(){
       return{

           shoesGoods:[],
           counterObj:{
               min:1,
               max:20
           },
           selecterData:[
                {
                    value:"经典性",
                    id:1
                },
                {
                    value:"豪华性",
                    id:2
                },
                {
                    value:"至尊豪华性",
                    id:3
                }
           ],
            timerData:[
            {
                value:"一个月",
                id:1,
            },
            {
                value:"三个月",
                id:3,
            },
            {
                value:"六个月",
                id:6,
            },
            {
                value:"一年",
                id:12,
            },
        ]
       }
   },
   components:{
       Counter,
       Types,
       Timer
   },
   props:{
       counter:{
           type:Object,
           default:{
               min:1,
               max:1
           }
       }
   },
created(){
    axios.get("http://localhost:7777/api/clothes").then((result) => {
   this.shoesGoods = result.data
   console.log(this.shoesGoods);
       }).catch((err) => {
           console.log(err);
       });
}

}



   
</script>

<style>
.list-ul{
    margin-left: 5px;
}
.list-ul li{
    float: left;
    width: 208px;
    margin-bottom: 8px;
    height: 320px;
    position: relative;
    font-size: 14px;
    font-family: "Microsoft Yahei";
    border: 1px solid #FFF;
    border-radius: 3px 3px 0 0;
}
.imgs_area{
    width: 208px;
    height: 208px;
    overflow: hidden;
    margin: 0 auto;
}
.title{
    height: 25px;
    line-height: 25px;
    overflow: hidden;
    margin-top: 5px;
    font-size: 15px;
    padding: 0 10px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;

}
.imgbox {
    width: 100%;
    height: 100%;
    border: 0 none;
    vertical-align: middle;
}
.price{
        margin-top: 5px;
    font-size: 12px;
    color: #999;
    padding: 0 10px;
    position: relative;
}
.price span{
    color: #FF4338;
    font-size: 14px;
}
a{
    color: #333;
    text-decoration: none;
}
    /* .open{
        text-align: left;
    }
    .buy-dialog-title{
        font-size: 16px;
    }
    .buy-dialog-btn{
        margin-top: 20px;
    }
    .buy-dialog-table{
        width: 100%;
    margin-bottom: 20px;
    }
    .buy-dialog-table td,
    .buy-dialog-table th{
        border: 1px solid #e3e3e3;
        text-align: center;
        padding: 5px 0;
    }
    .buy-dialog-table th{
        background-color: #4fc08d;
        color: #fff;
        border: 1px solid #4fc08d;
    }
    .button{
        background-color: #4fc08d;
        color: #fff;
        display: inline-block;
        padding: 10px 20px;
        cursor: pointer;
    }
    .sales-board-form-box{
        width: 100%;
    } */

</style>