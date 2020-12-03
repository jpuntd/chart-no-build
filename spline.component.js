import { h } from 'https://unpkg.com/preact?module';

const Spline = ({ points, xScale, yScale }) => {
  const path = points.map((coords) => `${xScale(coords.x)},${yScale(coords.y)}`).join(' ');

  return h(
    'svg',
    {
      class: 'spline',
      viewBox: '0 0 300 100',
      preserveAspectRatio: 'none'
    },
    h('polyline', {
      fill: 'none',
      stroke: 'teal',
      points: path,
      onmouseover: (e) => console.log(e)
    })
  );
};

export default Spline;
