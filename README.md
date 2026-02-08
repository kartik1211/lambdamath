# calqulate

A modular JavaScript library providing **functional programming helpers**, **async utilities**, **geometry functions**, and **calculus helpers**. Written in plain JavaScript with **TypeScript type definitions** for autocomplete and type checking.

---

## **Installation**

```bash
npm install calqulate
or with Yarn:

yarn add calqulate
Importing
// CommonJS
const {
  curry,
  compose,
  mapAsync,
  filterAsync,
  distance,
  rotatePoint,
  polygonArea,
  derivative,
  integrate
} = require('calqulate');

// ES Modules
import {
  curry,
  compose,
  mapAsync,
  filterAsync,
  distance,
  rotatePoint,
  polygonArea,
  derivative,
  integrate
} from 'calqulate';
Functional Programming Helpers
curry(fn)
Transforms a function into a curried version.

const add = (a, b) => a + b;
const curriedAdd = curry(add);
console.log(curriedAdd(2)(3)); // 5
compose(...fns)
Compose multiple functions (right to left).

const double = x => x * 2;
const increment = x => x + 1;
const fn = compose(double, increment);
console.log(fn(3)); // 8
mapAsync(arr, fn)
Map an array asynchronously.

await mapAsync([1, 2, 3], async x => x * 2); // [2, 4, 6]
filterAsync(arr, fn)
Filter an array asynchronously.

await filterAsync([1, 2, 3, 4], async x => x % 2 === 0); // [2, 4]
Geometry Helpers
distance(p1, p2)
Calculate Euclidean distance between two points.

const p1 = { x: 0, y: 0 };
const p2 = { x: 3, y: 4 };
console.log(distance(p1, p2)); // 5
rotatePoint(p, angle)
Rotate a point around the origin by an angle (radians).

console.log(rotatePoint({ x: 1, y: 0 }, Math.PI / 2)); // { x: 0, y: 1 }
polygonArea(points)
Compute the area of a polygon given its vertices.

const square = [
  { x: 0, y: 0 },
  { x: 0, y: 2 },
  { x: 2, y: 2 },
  { x: 2, y: 0 }
];
console.log(polygonArea(square)); // 4
Calculus Helpers
derivative(f, x, h?)
Compute the numerical derivative of a function at a point.

const f = x => x ** 2;
console.log(derivative(f, 3)); // 6
integrate(f, a, b, n?)
Compute the numerical integral of a function between a and b.

const f = x => x ** 2;
console.log(integrate(f, 0, 2)); // ≈ 2.6667
TypeScript Support
All functions have TypeScript definitions. Example:

import { distance, Point } from 'calqulate';

const a: Point = { x: 0, y: 0 };
const b: Point = { x: 1, y: 1 };
const d: number = distance(a, b);
```

# Contributing
Contributions are welcome! Please open an issue or a pull request.