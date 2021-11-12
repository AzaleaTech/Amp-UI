import * as echarts from '../../components/Echarts/echarts';
import geoJson from './mapData.js';

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr, // new
  });
  canvas.setChart(chart);

  echarts.registerMap('shaoxin', geoJson);

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}',
    },
    visualMap: {
      min: 0,
      max: 100,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    series: [
      {
        type: 'map',
        mapType: 'shaoxin',
        label: {
          normal: {
            show: true,
          },
          emphasis: {
            textStyle: {
              color: '#fff',
            },
          },
        },
        itemStyle: {
          normal: {
            borderColor: '#389BB7',
            areaColor: '#fff',
          },
          emphasis: {
            areaColor: '#389BB7',
            borderWidth: 0,
          },
        },
        animation: false,

        data: [
          { name: '越城区', value: 100 },
          { name: '柯桥区', value: 10 },
          { name: '上虞区', value: 20 },
          { name: '新昌县', value: 30 },
          { name: '诸暨市', value: 40 },
          { name: '嵊州市', value: 41 },
        ],
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
