const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, index) => start + index * step);

const scale = ([domainMin, domainMax], [rangeMin, rangeMax]) => {
  const factor = (rangeMax - rangeMin) / (domainMax - domainMin);
  return (num) => rangeMin + factor * (num - domainMin);
};

export { range, scale };
