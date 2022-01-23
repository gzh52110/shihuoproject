<template>
  <div>
      <div class="selection-component">
          <div class="selection-show" @click="showListHandle">
              <span>{{selecterData[currentIndex].value}}</span>
              <div class="arrow"></div>
          </div>
          <div class="selection-list" v-show="flag">
              <ul>
                  <li :key="index" 
                  v-for="(item,index) in selecterData"
                  @click="selectHandle(item,index)"
                  >
                      {{item.value}}
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            flag:false,
            currentIndex:0,
        
        }
    },
       props:{
               selecterData:{
                   type:Array,
                   default:function(){
                       return [
                           {
                               value:"test",
                               id:0,
                           }
                       ]
                   }
               }
           },
    methods:{
        showListHandle(){
            this.flag = !this.flag
        },
        selectHandle(data,index){
            console.log(data);
            this.currentIndex = index
             this.flag =false
        }
    }
}
</script>

<style>
.selection-component{
    position: relative;
    display: inline-block;
}
.selection-show{
    border: 1px solid #e3e3e3;
    padding: 0 20px 0 10px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 25px;
    width: 80px;
    text-align: center;
    line-height: 25px;
    border-radius: 3px;
    background-color: #fff;
}
    .selection-show .arrow{
        display: inline-block;
        border-left: 4px solid transparent;
        border-left: 4px solid transparent;
        border-left: 5px solid #e3e3e3;
        width: 0;
        height: 0;
        margin-top: -1px;
        margin-left: 6px;
        margin-right: -14px;
        vertical-align: middle;
    }
    .selection-list{
        display: inline-block;
        position:absolute;
        left: 0;
        top: 25px;
        width: 100%;
        background: #fff;
        border-top: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
        z-index: 5;
    }
    .selection-list li{
        padding: 5px 15px 5px 10px;
        border-left: 1px solid #e3e3e3;
        border-right: 1px solid #e3e3e3;
        cursor: pointer;
        background-color: #fff;
        word-spacing: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .selection-list li:hover{
        background-color: #e3e3e3;
    }
</style>