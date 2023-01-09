// solution using hash table
function twoNumberSum(array, targetSum) {
    let returnArray = []
    let hashTable = {};

    for (let count = 0; count < array.length; count++) {
        let currentItem = array[count];
        let targetItem = targetSum - currentItem;
        if (hashTable[targetItem.toString()]) {
            returnArray = [currentItem, targetItem];
            break;
        }
        else hashTable[currentItem.toString()] = true;
    }

    return returnArray;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
