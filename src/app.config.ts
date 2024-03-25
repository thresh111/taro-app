export default defineAppConfig({
  pages: [
    "pages/explore/index",
    "pages/category/index",
    "pages/shopCar/index",
    "pages/my/index",
    "pages/ranking_list/index",
    "pages/video_course/index",
    "pages/customized_machine/index",
    "pages/diy_key_board/index",
    "pages/product_detail/index",
    "pages/machine_plan/index",
    "pages/product_list/index",
    "pages/article_detail/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#000",
    selectedColor: "#6190E8",
    list: [
      {
        pagePath: "pages/explore/index",
        text: "探索",
        iconPath: "assets/tabBar/index1.png",
        selectedIconPath: "assets/tabBar/index1_active.png",
      },
      {
        pagePath: "pages/category/index",
        text: "分类",
        iconPath: "assets/tabBar/index2.png",
        selectedIconPath: "assets/tabBar/index2_active.png",
      },
      {
        pagePath: "pages/shopCar/index",
        text: "购物车",
        iconPath: "assets/tabBar/index4.png",
        selectedIconPath: "assets/tabBar/index4_active.png",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "assets/tabBar/index5.png",
        selectedIconPath: "assets/tabBar/index5_active.png",
      },
    ],
  },
});
