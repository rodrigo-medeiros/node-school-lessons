var _ = require('lodash');

var worker = function (ordersList) {
  var result = [];
  ordersList = _.groupBy(ordersList, 'article');

  _.forEach(ordersList, function (item, key) {
    key = parseInt(key);
    var total_orders = 0;

    if (item.length === 1) {
      total_orders = item[0].quantity;
    } else {
      total_orders = _.reduce(item, function (sum, item) {
        return sum + item.quantity;
      },
      0);
    }

    result.push({
      article: key,
      total_quantity: total_orders
    });
  });

  return _.sortBy(result, 'total_quantity').reverse();
};

module.exports = worker;
