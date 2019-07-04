<template>
    <div>
       <h2> 传递过来的名字{{name}}--------传递过来的{{id}}</h2>
    </div>
</template>
<script>
export default {

    name:"details",
    props:["id","name"],

created(){
   

    
    // let {id,name}=this.$route.params;
    // this.id=id;
    // this.name=name;

    // let {id,name}=this.$route.query;
    // this.id=id;
    // this.name=name;
},
// data(){
//     return{
//         id:"",
//         name:""
//     }
// }



    
}
</script>
<style>

</style>
