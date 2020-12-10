import { h } from 'https://unpkg.com/preact?module';
import Spline from './spline.component.js';

const LineChart = ({lines, xScale, yScale}) => {
  return h(
    'svg',
    {
      class: 'spline',
      viewBox: '0 0 300 100',
      preserveAspectRatio: 'none'
    },
    lines.map(line => h(Spline, {title:line.title, points:line.points, xScale, yScale}))
  );
};

export default LineChart;