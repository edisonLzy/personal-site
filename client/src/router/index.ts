import Vue from "vue";
import VueRouter, { RouteConfig, Route } from "vue-router";
import {deleteCache,setCache,state} from "../views/entry/store";
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location:string) {
    return originalPush.call(this, location).catch(err => err);
};

const routes: Array<RouteConfig> = [
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/home.vue"),
    },
    {
        path: "/entry",
        name: "entry",
        component: () => import("@/views/entry/index.vue"),
        redirect: (to: Route) => {
            console.log(to);
            return {
                name:"blog"
            };
        },
        children: [
            {
                name: "blog",
                path: "blog",
                component: () => import("@/views/entry/blog/index.vue")
            },
            {
                name: "essay",
                path: "essay",
                component: () => import("@/views/entry/essay/index.vue")
            },
            {
                name: "analyze",
                path: "analyze",
                component: () => import("@/views/entry/analyze/index.vue")
            },
            {
                name: "about",
                path: "about",
                component: () => import("@/views/entry/about/index.vue")
            },
            {
                name:"detail",
                path:"detail",
                component: () => import("@/views/entry/detail/index.vue")
            }
        ]
    },
    {
        path: "*",
        redirect(to: any) {
            return {
                name: "home"
            };
        }
    }
];

const router = new VueRouter({
    routes
});

router.afterEach((to,from)=>{
    const {name:toName}  = to;
    const {name:fromName}  = from;
    const needCache = toName==="detail"&&fromName==="essay" || toName==="essay"&&fromName==="detail" ;
    console.log(state.cache);
    if(!needCache){
        deleteCache("essay");
    }else{
        setCache("essay");
    }
});

export default router;
