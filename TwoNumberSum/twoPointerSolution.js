// solution using two pointer example
function twoNumberSum(array, targetSum) {
    // Write your code here.
    array = array.sort((a, b) => (a - b));

    let returnArray = [];
    let leftPointer = 0;
    let rightPointer = array.length - 1;

    for (let count = 0; count < array.length; count++) {
        let currentSum = array[leftPointer] + array[rightPointer];
        if (currentSum < targetSum) leftPointer++;
        else if (currentSum > targetSum) rightPointer--;
        else if (currentSum == targetSum) returnArray = [array[leftPointer], array[rightPointer]]
    }

    return returnArray;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
