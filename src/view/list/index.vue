<template>
    <div>
       
      <!-- <router-link 
      v-for="(item,index) in goods" :key="index" tag="li"
        :to=" '/details/'+item.goodsId+'/'+item.goodsName"

      >
        

        <p>{{item.goodsName}}</p>
      </router-link> -->

       <router-link 
      v-for="(item,index) in goods" :key="index" tag="li"
        :to='{name:"details",params:{id:item.goodsId,name:item.goodsName}}'

      >
        
        
        <p>{{item.goodsName}}</p>
      </router-link>

      <!-- <router-link 
      v-for="(item,index) in goods" :key="index" tag="li"
        :to="'/details?id='+item.goodsId+'&name='+item.gooodsName"

      >
        
        
        <p>{{item.goodsName}}</p> -->
      <!-- </router-link> -->
         <h2>list</h2>
    </div>
</template>
<script>

export default {
    
   name:"list",


   data(){
       return{
        goods:[
            {goodsId:1,
            goodsName:"猫咪薯条"
            
            },
             {goodsId:2,
            goodName:"三只松鼠兰花豆"
            
            },
             {goodsId:3,
            goodsName:"草莓饼干"
            
            },
             {goodsId:3,
            goodsName:"芒果干"
            
            },
        ]
       }
   }

}
</script>
<style scoped>
   
</style>