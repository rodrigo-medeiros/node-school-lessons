function curryN(fn, n) {
  if (typeof n !== 'number') {
    n = fn.length;
  }

  function getCurriedFn(prev) {
    return function (arg) {
      var args = prev.concat(arg);
      if (args.length < n) {
        return getCurriedFn(args);
      }
      return fn.apply(this, args);
    };
  }

  return getCurriedFn([]);
}

module.exports = curryN;