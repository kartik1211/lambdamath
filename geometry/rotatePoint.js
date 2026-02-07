function rotatePoint(p, angle) {
  return {
    x: p.x * Math.cos(angle) - p.y * Math.sin(angle),
    y: p.x * Math.sin(angle) + p.y * Math.cos(angle)
  };
}

module.exports = { rotatePoint };
