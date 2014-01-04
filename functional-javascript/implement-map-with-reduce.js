module.exports = function arrMap(arr, fn) {
  return arr.reduce(function (prev, item) {
    return prev.concat(fn(item));
  }, []);
};