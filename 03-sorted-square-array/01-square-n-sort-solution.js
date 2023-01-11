function sortedSquaredArray(array) {
    // Write your code here.
    let returnArray = [];
    for (let count = 0; count < array.length; count++) {
        returnArray.push(array[count] * array[count]);
    }

    returnArray = returnArray.sort((a, b) => (a - b))

    return returnArray;
}


exports.sortedSquaredArray = sortedSquaredArray;
