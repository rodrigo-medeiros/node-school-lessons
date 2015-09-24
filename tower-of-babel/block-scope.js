'use strict';
// This variable `a` should be accessible outside of the block scope.
var a = 5;

// This variable `b` should not be reassignable.
const b = process.argv[2];

if (a === 5) {
  // This variable `c` should only be valid in this block.
  let c = 4;
  console.log(c);  // 4

  // This variable `b` should only be valid in this block.
  let b = 8;
  console.log(b); // 8
}

console.log(a); // 5
console.log(b);
try {
  // Trying to change the value of `c`
  c = 1000;
} catch (e) {
  // but an `c is not defined` error should occur.
  console.log(e);
}
