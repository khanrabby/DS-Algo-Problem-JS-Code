// solution using two nested for loops
function twoNumberSum(array, targetSum) {
    // Write your code here.
    let resultArray = [];
    for (let count = 0; count < array.length; count++) {
        let item = array[count];
        for (let innerCount = 0; innerCount < array.length; innerCount++) {
            if (innerCount != count) {
                if (item + array[innerCount] == targetSum) {
                    resultArray = [item, array[innerCount]];
                    break;
                }
            }
        }
    }

    return resultArray;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;