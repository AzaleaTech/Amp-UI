# Echarts 图表

## 概述

在微信小程序中使用 ECharts。

[参考文档](https://echarts.apache.org/zh/tutorial.html#%E5%9C%A8%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)。

## 示例

```html
<a-echart canvas-id="echarts" ec="{{ ec }}"></a-echart>
```

```js
import * as echarts from '../../components/Echarts/echarts';

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width,
    height,
    devicePixelRatio: dpr, // new
  });
  canvas.setChart(chart);

  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
    ],
  };
  chart.setOption(option);
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart,
    },
  },
});
```

## API

### Props

| 参数                 | 说明                | 类型    | 默认值 | 可选值 | 必填 |
| -------------------- | ------------------- | ------- | ------ | ------ | ---- |
| canvas-id            | 画布唯一标识        | string  | -      | -      | 否   |
| ec                   | 初始化图表内容对象  | object  | -      | -      | 是   |
| force-use-old-canvas | 是否使用旧版 Canvas | boolean | false  | -      | 否   |

`ec` 对象， `option` 的使用方法参见 [ECharts 配置项文档](https://echarts.apache.org/zh/option.html)

```js
function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width,
    height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);
  const option = {
    ...
  };
  chart.setOption(option);
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    }
  }
});

```

## 常见问题
