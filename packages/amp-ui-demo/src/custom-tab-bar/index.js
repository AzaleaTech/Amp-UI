Page({
  data: {
    tabbar: {
      show: true, // modal组件渲染时隐藏tab栏
      selected: 0,
      color: '#252525',
      selectedColor: '#009CA5',
      backgroundColor: '#fff',
      list: [
        {
          pagePath: '/pages/index/index',
          text: '首页',
          iconPath: '/assets/images/tabbar/home.png',
          selectedIconPath: '/assets/images/tabbar/home-selected.png',
        },
        {
          pagePath: '/pages/tabbar/index',
          text: 'tabbar',
          iconPath: '/assets/images/tabbar/home.png',
          selectedIconPath: '/assets/images/tabbar/home-selected.png',
        },
      ],
      customFn: null,
    },
  },
});
