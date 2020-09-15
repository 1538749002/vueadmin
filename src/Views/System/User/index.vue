<template>
 <div>
     <el-button type="primary" @click="add">添加管理员</el-button>
          <!--列表组件-->
         <vlist @edit="edit"></vlist>
          <!-- 添加修改组件 -->
          <vinfo :info="info" ref="dialog"></vinfo>
 </div>
</template>

<script>
import Vlist from "./vlist"
import Vinfo from "./vinfo"
export default {
 data(){
 return{
     info:{
         isAdd:false,
         isShow:false
     }
 }
 },
 created(){},
 methods:{
     add(){
         this.info.isAdd = this.info.isShow = true
     },
     edit(val){
         this.info.isAdd = false;
         this.info.isShow = true;
         //调用弹框组件方法
          this.$refs.dialog.setinfo(val);
     
     }
 },
 components:{
     Vlist,
     Vinfo
 }
}

</script>
<style scoped>
</style>