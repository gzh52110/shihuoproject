<template>
  <div>
      产品列表
  </div>
</template>

<script>
export default {
    mounted(){
        this.$api.selectTbItemAllByPage().then((result) => {
            console.log(result.data);
        }).catch((err) => {
            console.log("请求数据失败",err);
        });
    }
}
</script>

<style>

</style>