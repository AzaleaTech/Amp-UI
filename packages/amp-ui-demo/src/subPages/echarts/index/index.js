Page({
  data: {
    lists: [
      {
        id: 'line',
        name: '折线图',
      },
      {
        id: 'bar',
        name: '柱状图',
      },
      {
        id: 'pie',
        name: '饼图',
      },
      {
        id: 'radar',
        name: '雷达图',
      },
      {
        id: 'map',
        name: '地图',
      },
    ],
  },

  handleTap(e) {
    const { id } = e.target.dataset;
    wx.navigateTo({
      url: `../${id}/index`,
    });
  },
});
