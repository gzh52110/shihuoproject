<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" style="width:500px;text-align:left;padding-left:5px;margin:10px 20px;">
  <el-form-item label="商品名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
<el-form-item label="商品描述">
  <el-upload
  action="#"
  list-type="picture-card"
  :auto-upload="false">
    <i class="el-icon-plus"></i>
    <template v-slot:file="{file}">

      <img
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt=""
      >
      <!-- <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span> -->
     </template>
</el-upload>

</el-form-item>
  <el-form-item label="商品描述">
    <el-input type="textarea" v-model="form.desc" style="height:50px"></el-input>
  </el-form-item>

  <el-form-item label="上架">
    <el-switch v-model="form.online"></el-switch>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">添加</el-button>
  </el-form-item>
</el-form>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  </div>
</template>

<script>
// http://120.76.247.5:2003/api/upload/goods
  export default {
    name:"GoodsAdd",
    data() {
      return {
        form: {
          name: '',
          desc: '',
          category:'',
          online:false,
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped>
  
</style>