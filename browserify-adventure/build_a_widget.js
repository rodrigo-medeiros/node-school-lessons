var domify = require('domify');

var widget = domify('<div>Hello <span class="name"></span>!</div>');

widget.setName = function (str) {
};

widget.appendTo = function (target) {
};

module.exports = widget;
