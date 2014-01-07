function repeat(operation, num) {
  if (num <= 0) {
    return;
  }
  operation();

  if (num % 50 === 0) {
    setTimeout(function () {
      repeat(operation, --num);
    });
  } else {
    return repeat(operation, --num);
  }
}

module.exports = repeat;