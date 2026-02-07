function polygonArea(points) {
  return Math.abs(
    points.reduce((acc, p, i, arr) => {
      const next = arr[(i + 1) % arr.length];
      return acc + (p.x * next.y - next.x * p.y);
    }, 0) / 2
  );
}

module.exports = { polygonArea };
