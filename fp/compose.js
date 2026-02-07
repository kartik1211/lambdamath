function compose(...fns) {
  return (arg) => fns.reduceRight((v, f) => f(v), arg);
}

module.exports = { compose };
