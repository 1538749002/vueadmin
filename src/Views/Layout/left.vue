<template>
  <div>
    <h3 class="logo">小U商城后台</h3>
    <el-menu 
    class="page-menu" 
    background-color="#444" 
    text-color="#fff" 
    router 
    :default-active="$route.path"
    :collapse="iscollapse"
    >
      <el-menu-item index="/index"><i class="el-icon-house"></i><span slot="title">后台首页</span></el-menu-item>
      <el-submenu index="2"><template slot="title"><i class="el-icon-setting"></i> <span slot="title">系统设置</span></template>
        <el-menu-item index="/menu">菜单管理</el-menu-item>
        <el-menu-item index="/role">角色管理</el-menu-item>
        <el-menu-item index="/user">管理员管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3"><template slot="title"><i class="el-icon-goods"></i><span slot="title">商城管理</span></template>
        <el-menu-item index="3-1">分类管理</el-menu-item>
        <el-menu-item index="3-2">规格管理</el-menu-item>
        <el-menu-item index="3-3">商品管理</el-menu-item>
        <el-menu-item index="3-4">会员管理</el-menu-item>
        <el-menu-item index="3-5">轮播图管理</el-menu-item>
        <el-menu-item index="3-6">秒杀管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapState(['iscollapse'])
  },
  methods: {},
  components: {}
};
</script>
<style scoped>
.logo {
  line-height: 60px;
  text-align: center;
  color: #fff;
  background-color: #666;
  white-space: nowrap;
  overflow: hidden;
}
.page-menu {
  border-right: none;
}
.el-menu-item, .el-submenu__title{
  height: 50px;
  line-height: 50px;
}
.el-submenu .el-menu-item{
  height: 35px;
  line-height: 35px;
}
</style>
