import Module from './module';
var arg1 = process.argv[2];
var arg2 = process.argv[3];

console.log(Module.PI);
console.log(Module.sqrt(+arg1));
console.log(Module.square(+arg2));
