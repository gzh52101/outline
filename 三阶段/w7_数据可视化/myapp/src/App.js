import { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

// 全部引入（不推荐）
// 导致最终打包的文件过大
// import * as echarts from 'echarts';
// console.log('echarts=', echarts);

// 模块引入/按需引入（推荐）
import * as echarts from 'echarts/core';

// 引入组件
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components';

// 引入图表类型
import {
  PieChart,
  LineChart,
  // BarChart,
} from 'echarts/charts';

// 引入渲染类型（canvas,svg）
import {
  CanvasRenderer,
  // SVGRenderer
} from 'echarts/renderers';

echarts.use(
  [
    TitleComponent, TooltipComponent, LegendComponent,GridComponent,
    PieChart, LineChart,
    CanvasRenderer
  ]
);

function App() {
  const chart = useRef(null);
  useEffect(() => {
    // const myChart = echarts.init(chart.current)
    console.log('dom=', document.querySelector('.charts'))
    const myChart = echarts.init(document.querySelector('.charts'))
    let option = {
      title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },

        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          // smooth: true
        }
      ]
    };

    myChart.setOption(option);
  }, [])
  return (
    <div className="App">
      <h1>echarts在React中的使用</h1>
      <div className="charts" ref={chart} style={{ height: 300 }}></div>
    </div>
  );
}

export default App;
