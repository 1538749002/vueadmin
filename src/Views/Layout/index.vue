<template>
<el-container class="page">
     <el-aside  :width="iscollapse ? '64px':'220px'" class="page-nav">
         <left/>
     </el-aside>
     <el-container>
         <el-header class="page-content">
             <top/>
         </el-header>
         <el-main class="page-main">
            <router-view/>
         </el-main>
     </el-container>
 </el-container>
</template>

<script>
import left from "./left";
import top from "./top";
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
  components: {
      left,
      top
  }
};
</script>
<style>
.page {
  width: 100vw;
  height: 100vh;
}
.page-nav {
  height: 100%;
  background: #aaaaaa;
}
.page-header {
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  /* position: relative;
  z-index: 999; */
}
.page-content {
  height: 100%;
  background-color: #f7f7f7;
}
</style>