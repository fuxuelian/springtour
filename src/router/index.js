import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../view/home/index.vue";
import List from "../view/list/index.vue";
import Order from "../view/order/index.vue";
import Tleme from "../view/telme/index.vue";
import Mine from "../view/mine/index.vue";
import Myhead from "../conponents/myhead/index.vue";
import One from "../conponents/one/index.vue";
import Details from "../view/details/index.vue";




Vue.use(VueRouter)

const router = new VueRouter({
    mode: "hash",
    routes: [{
            path: "/home",
            component: Home,
            name:"home",
            children: [{
                path: 'one',
                component: One
            }]
        },
        {
            path: "/list",
            component: List,
            name:"list"
        },
        {
            path: "/order",
            component: Order,
            name:"order"
        },
        {
            path: "/telme",
            component: Tleme,
            name:"telme"
        },
        {
            path: "/mine",
            component: Mine,
            name:"mine",
            children:[{
                path:'myhead',
                component:Myhead
               
            }]
        },

        
        {
            path: "/details/:id/:name",

            // path:"/details",
            component: Details,
             name:"details",
             props:true

        },
       





    ]

})

export default router;