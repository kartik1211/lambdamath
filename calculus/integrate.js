function integrate(f, a, b, n = 1000) {
  const h = (b - a) / n;
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    const coeff = i === 0 || i === n ? 0.5 : 1;
    sum += coeff * f(a + i * h);
  }
  return sum * h;
}

module.exports = { integrate };
