import { h } from 'https://unpkg.com/preact?module';
import {range, color} from './utils.js';

const Spline = ({ title, points, xScale, yScale }) => {
  console.log(title, color(title));
  
  if (!points || !points.length) return null;
  const path = points.map((coords) => `${xScale(coords.x)},${yScale(coords.y)}`).join(' ');
  return h('polyline', {
    fill: 'none',
    stroke: color(title),
    points: path,
    onmouseover: (e) => console.log(title, e)
  });


};

export default Spline;
