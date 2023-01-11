function sortedSquaredArray(array) {
  // Write your code here.
  let returnArray = new Array(array.length);
  let resultIndex = array.length - 1
  let minPointer = 0;
  let maxPointer = array.length - 1;

  for (let count = 0; count < array.length; count++) {
    if (Math.abs(array[maxPointer]) >= Math.abs(array[minPointer])) {
      returnArray[resultIndex] = array[maxPointer] * array[maxPointer];
      maxPointer--;

    }
    else {
      returnArray[resultIndex] = array[minPointer] * array[minPointer];
      minPointer++;
    }

    resultIndex--;
  }

  return returnArray;
}
exports.sortedSquaredArray = sortedSquaredArray;
