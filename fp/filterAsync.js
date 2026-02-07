async function filterAsync(arr, fn) {
  const results = await Promise.all(arr.map(async x => ({ x, keep: await fn(x) })));
  return results.filter(r => r.keep).map(r => r.x);
}

module.exports = { filterAsync };
