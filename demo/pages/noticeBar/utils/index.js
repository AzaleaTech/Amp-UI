export const getRandomColor = () => {
  //随机生成十六进制颜色
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6);
};
