var domify = require('domify');

module.exports = Widget;

function Widget () {
  if (!(this instanceof Widget)) {
    return new Widget();
  }
  this.element = domify('<div>Hello <span class="name"></span>!</div>');
};

Widget.prototype.setName = function (str) {
  var span = this.element.querySelector('span.name');
  span.textContent = str;
};

Widget.prototype.appendTo = function (target) {
  target.appendChild(this.element);
};
