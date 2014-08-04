var numbers = process.argv.slice(2),
    min = Math.min(...numbers);

console.log(`The minimum of [${numbers}] is ${min}`);
