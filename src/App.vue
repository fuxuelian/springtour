<template>
  <div id="app">
    <router-view></router-view>
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/list">列表</router-link>
    <router-link to="/order">菜单</router-link>
    <router-link to="/mine">我的</router-link> -->
    <TabBar/>
  </div>
</template>
<script>
// import Head from "./common/header/head.vue"

import TabBar from "./common/tabBar/index.vue";

export default {
  name: "app",

  components: {
   //   Head,
    // Home,
    // List,
    // Order,
    // Mine,
    TabBar,
   
  },
  data() {
    return {
      
    }
  },
 
};
</script>
<style>
#app{
   height: 100%;
}
.page{
   width:100%;
   position: absolute;
   top: 0;
   bottom: 0;
   padding-top: 1rem;
   padding-bottom:1rem;
   
}
</style>