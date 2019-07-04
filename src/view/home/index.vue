<template>
  <div>
  <router-view></router-view>
     <button @click="handleTo">跳转到二级页面</button>
     <button @click="handleBack"></button>
    <h2>home</h2>
  </div>
</template>
<script>

export default {
   name:"home",

 data(){
     return{
       
     }
   
   },
   methods:{
   handleTo(){
     this.$router.push("/home/one")
   },
   handleBack(){
     this.$router.back()
   }
   }
  
}
</script>
<style scoped>
  
</style>


