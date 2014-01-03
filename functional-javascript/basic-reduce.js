function countWords(inputWords) {
  return inputWords.reduce(function(resultObj, word) {
    resultObj[word] = ++resultObj[word] || 1;
    return resultObj;
  }, {});
}

module.exports = countWords;