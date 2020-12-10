const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, index) => start + index * step);

const scale = ([domainMin, domainMax], [rangeMin, rangeMax]) => {
  const factor = (rangeMax - rangeMin) / (domainMax - domainMin);
  return (num) => rangeMin + factor * (num - domainMin);
};

const color = (title) => {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = (hash * 64 + title.charCodeAt(i)) % 100;
  }
  const goldenAngle = 180 * (3 - Math.sqrt(5));

  return `hsl(${hash * goldenAngle + 60}, 100%, 75%)`;
};

export { range, scale, color };
