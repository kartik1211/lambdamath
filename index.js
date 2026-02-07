// FP
const { curry } = require('./fp/curry');
const { compose } = require('./fp/compose');
const { mapAsync } = require('./fp/mapAsync');
const { filterAsync } = require('./fp/filterAsync');

// Geometry
const { distance } = require('./geometry/distance');
const { rotatePoint } = require('./geometry/rotatePoint');
const { polygonArea } = require('./geometry/polygonArea');

// Calculus
const { derivative } = require('./calculus/derivative');
const { integrate } = require('./calculus/integrate');

module.exports = {
  // FP
  curry,
  compose,
  mapAsync,
  filterAsync,

  // Geometry
  distance,
  rotatePoint,
  polygonArea,

  // Calculus
  derivative,
  integrate
};
