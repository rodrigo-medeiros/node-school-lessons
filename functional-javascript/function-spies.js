function Spy(target, method) {
  var defaultFunction = target[method],
    result = {
      count: 0
    };

  target[method] = function () {
    result.count++;
    return defaultFunction.apply(this, arguments);
  };

  return result;
}

module.exports = Spy;