async function mapAsync(arr, fn) {
  return Promise.all(arr.map(fn));
}

module.exports = { mapAsync };
