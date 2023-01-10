function isValidSubsequence(array, sequence) {
    // Write your code here.
    let matchFound = 0;
    let targetMatch = sequence.length;

    for (let count = 0; count < array.length; count++) {
        if (sequence[matchFound] == array[count]) {
            matchFound++;
        }

        if (targetMatch == matchFound) break;
    }

    return targetMatch == matchFound;

}

exports.isValidSubsequence = isValidSubsequence;