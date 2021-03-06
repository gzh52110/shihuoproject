import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/main/HomePage/Home.vue";
import Layout from "../views/Layout.vue";
import goodsRouter from "./goodsRoute.js"
Vue.use(VueRouter);

// const routes = [
//   {
//     path:"/",
//     name:"Layout",
//     component:Layout,
//     children:[
//       {
//         path: '/',
//         name: 'Home',
//         component: Home,
//         meta:{
//           isLogin:true
//         },

//       },
//       {
//         path: '/ad',
//         name: 'ADCategory',
//         component: () => import(/* webpackChunkName: "about" */ '../views/main/ADCategory.vue'),
//         meta:{
//           isLogin:true
//         }
//       },
      //  {
      //       path:"/details",
      //       name:"Details",
      //       component: () => import(/* webpackChunkName: "about" */ '../views/main/HomePage/sub/Details.vue'),
      //       children:[
      //         {
      //           path:"openproduct",
      //           name:"Openproduct",
      //           component:()=>import("../views/main/HomePage/sub/openproduct.vue")
      //         },
      //         {
      //           path:"golife",
      //           name:"golife",
      //           component:()=>import("../views/main/HomePage/sub/golife.vue")
      //         },
      //         {
      //           path:"heigh",
      //           name:"heigh",
      //           component:()=>import("../views/main/HomePage/sub/heigh.vue")
      //         },
      //         {
      //           path:"logo",
      //           name:"logo",
      //           component:()=>import("../views/main/HomePage/sub/logo.vue")
      //         },
      //       ]
      //     },
//       {
//         path: '/params',
//         name: 'Params',
//         component: () => import(/* webpackChunkName: "about" */ '../views/main/Params.vue'),
//         meta:{
//           isLogin:true
//         }
//       },
//       {
//         path: '/product',
//         name: 'Product',
//         component: () => import(/* webpackChunkName: "about" */ '../views/main/Product/index.vue'),
//         meta:{
//           isLogin:true
//         }
//       },

//     ]
//   },
//  {
//    path:"/login",
//    name:"Login",
//    component:()=> import ('../views/Login.vue')
//  }

// ]

// ### route
// HomePage ??????
// GoodsManage ????????????
// OrderManage ????????????
// AdvertisingManage ????????????
// RoleManage ????????????
// UserManage ????????????


const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      // HomePage ??????
      {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          isLogin: true,
        },
      },
      {
        path:"/details",
        name:"Details",
        component: () => import(/* webpackChunkName: "about" */ '../views/main/HomePage/sub/Details.vue'),
        children:[
          {
            path:"openproduct",
            name:"Openproduct",
            component:()=>import("../views/main/HomePage/sub/shoes.vue")
          },
          {
            path:"golife",
            name:"golife",
            component:()=>import("../views/main/HomePage/sub/shuma.vue")
          },
          {
            path:"heigh",
            name:"heigh",
            component:()=>import("../views/main/HomePage/sub/bag.vue")
          },
          {
            path:"logo",
            name:"logo",
            component:()=>import("../views/main/HomePage/sub/clothes.vue")
          },
        ]
      },
      goodsRouter,
      // OrderManage ????????????
      {
        path: "/order",
        name: "OrderManage",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/main/OrderManage/OrderManage.vue"
          ),
        meta: {
          isLogin: true,
        },
      },
      // AdvertisingManage ????????????
      {
        path: "/advertising",
        name: "AdvertisingManage",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/main/AdvertisingManage/AdvertisingManage.vue"
          ),
        meta: {
          isLogin: true,
        },
      },
      // RoleManage ????????????
      {
        path: "/role",
        name: "RoleManage",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/main/RoleManage/RoleManage.vue"
          ),
        meta: {
          isLogin: true,
        },
      },
      // UserManage ????????????
      {
        path: "/user",
        name: "UserManage",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/main/UserManage/UserManage.vue"
          ),
        meta: {
          isLogin: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];
const router = new VueRouter({
  routes,
});

export default router;
