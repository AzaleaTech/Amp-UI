  /**
   * 获取组件内部节点位置信息（单个）
   * @param component 组件实例
   * @param selector {String} css选择器
   * @returns boundingClientRect() 回调函数的值
   */
export const getNodeRectFromComponent = async (component, selector) => {
  return await new Promise((resolve) => {
    component
      .createSelectorQuery()
      .select(selector)
      .boundingClientRect((res) => {
        resolve(res);
      })
      .exec();
  });
};
