process.stdin.on('data', function (buff) {
  var typedArray = new Uint8Array(buff.length);
  for (var i = 0; i < typedArray.length; i++) {
    typedArray[i] = buff[i];
  }
  console.log(JSON.stringify(typedArray));
});