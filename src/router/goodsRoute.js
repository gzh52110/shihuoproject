// GoodsManage 商品管理
export default 
{
  path: "/goods",
  name: "GoodsManage",
  component: () =>
    import(
      /* webpackChunkName: "about" */ "../views/main/GoodsManage/GoodsManage.vue"
    ),
  meta: {
    isLogin: true,
  },
  children:[

    {
    path:'list',
    component:()=>import("../views/main/GoodsManage/List.vue")
  },
    {
    path:'edit/:id',
    component:()=>import("../views/main/GoodsManage/Edit.vue")
  },
    {
    path:'add',
    component:()=>import("../views/main/GoodsManage/Add.vue")
  },
]
}