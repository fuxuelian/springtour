<template>
  <div id="footer">
    <ul>
      <router-link 
       v-for="(item,index) in tablBars " :key="index" :to="item.path" tag="li"
     >
        <i v-html="item.icon" class="iconfont"></i>
        <span>{{item.title}}</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "tabBar",
  data() {
    return {
      tablBars: [
        {
          icon: "&#xe62b;",
          title: "首页",
          path:"/home"
        },
         {
          icon: "&#xe629;",
          title: "目的地",
          path:"/list"
        },
         {
          icon: "&#xe65f;",
          title: "发现",
          path:"/order"
        },
         {
          icon: "&#xe63d;",
          title: "联系",
          path:"/telme"
         
        },
         {
          icon: "&#xe61a;",
          title: "我的",
          path:"/mine"
          
        },
        
      ],
    };
  },
  methods:{
     
  }
};
</script>
<style>
#footer{
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
   border-top: 1px solid #ddd;
}

#footer>ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
}
#footer>ul>li{
    display: flex;
    flex-direction:column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: .3rem;

}

#footer>ul>li>i{
    font-size:.4rem;
}

#footer>ul>.router-link-active{
    color:#00be88;
}

</style>


