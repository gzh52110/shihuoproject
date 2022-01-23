<template>
  <div class="index-board-list">
      <div 
      class="index-board-item"
      v-for="(item,index) in buyData"
      :key="index"
      :class="['index-board-'+item.url,{'line-last':index%2 !==0}]"
      >
      <div class="index-board-item-inner">
          <img :src="item.img" alt="" srcset="" class="img-goods">
          <h2>{{item.title}}</h2>
          <p>{{item.desc}}</p>
          <div class="index-board-button">
              <router-link :to="'/details/'+item.url" class="button">立即购买</router-link>
          </div>
      </div>

      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        buyData:[
            {
                title:"鞋类",
                desc:"最帅的鞋",
                url:"openproduct",
                img:"http://static.shihuocdn.cn/def/20210805/33cd34a62a7614233eedc9b1b0cd12571628170036.jpg"
            },
            {
                title:"服饰",
                desc:"最潮的服装",
                url:"logo",
                            img:"http://static.shihuocdn.cn/def/20210417/476075b1bb63897db9436a8ae95576991618637434.jpg"
            },
            {
                title:"数码",
                desc:"最新的科技",
                url:"golife",
                img:"http://proxy.shihuocdn.cn/aHR0cDovL20uMzYwYnV5aW1nLmNvbS9tb2JpbGVjbXMvczcyMHg3MjBfamZzL3QyMzg3OC8zMjUvMjUyNDU3MjEyNi8yMTExMzMvMzAwYzFjMTMvNWI4M2FlOTJOMTc0ZWJjZmEuanBnIXE3MC5qcGc"
            },
            {
                title:"包类",
                desc:"最多的包",
                url:"heigh",
                            img:"http://static.shihuocdn.cn/def/20210406/d5f432d25857cc505e52e3564162b6b11617703875.jpg"
            },
        ]
    }
}
}
</script>

<style scoped>
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
        position: relative;
    }

    /* .index-board-openproduct .index-board-item-inner{
        background: url("http://static.shihuocdn.cn/def/20210805/33cd34a62a7614233eedc9b1b0cd12571628170036.jpg") no-repeat;
    }
    .index-board-logo .index-board-item-inner{
        background: url(https://fakeimg.pl/250x100/) no-repeat;
    }
    .index-board-golife .index-board-item-inner{
        background: url(https://fakeimg.pl/250x100/) no-repeat;
    }
    .index-board-heigh .index-board-item-inner{
        background: url(https://fakeimg.pl/250x100/) no-repeat;
    } */
    .img-goods{
        width: 100px;
        height: 100px;
        position: absolute;
        left: 10px;
        top: 0;
    }
    .index-board-item h2{
        font-size: 18px;
        font-weight: bold;
        color: #000;
        margin-bottom: 15px;
    }
    .index-board-button{
        margin-top: 20px;
    }
    .lastest-news{
        min-height: 350px;
    }
    .new-item{
        display: inline-block;
        width: 230px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .button{
        background-color: #4fc08d;
        color: #fff;
        display: inline-block;
        padding: 10px 20px;
        cursor: pointer;
    }
</style>