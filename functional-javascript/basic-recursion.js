function reduce(arr, fn, initial) {
  return (function reduceOne(idx, value) {
    if (idx > arr.length - 1) {
      return value;
    }
    return reduceOne(idx + 1, fn(value, arr[idx], idx, arr));
  })(0, initial);
}

module.exports = reduce;