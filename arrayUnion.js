/** 
 * 
 * Union of two sorted arrays using merge approach , this is similar to the merge function of merge sort
 *      1. Use two index variables i and j, initial values i = 0, j = 0 
        2. If arr1[i] is smaller than arr2[j] then print arr1[i] and increment i. 
        3. If arr1[i] is greater than arr2[j] then print arr2[j] and increment j. 
        4. If both are same then print any of them and increment both i and j. 
        5. Print remaining elements of the larger array.
 * 
    This approcah is failed to hanle duplicate elements in both of the array. 
 */


// let array1 = [1, 3, 4,5, 7];
// let array2 = [2, 3, 5, 6];

// let finalArray = [];

// let i=0,j=0;



// while(i<array1.length && j<array2.length){
//     if(array1[i]< array2[j]){
//         // array1 element is greater than 
//         console.log(`array1[i]< array2[j]`)
//         finalArray.push(array1[i]);
//         i++;
//     }
//     else if(array1[i] == array2[j]){
//         console.log(`array1[i] == array2[j]`)
//         finalArray.push(array1[i]);
//         i++;
//         j++;
//     }
//     else{
//         console.log(`array2[j] > array1[i] `)
//         finalArray.push(array2[j]);
//         j++;
//     }

// }

// while(i<array1.length){
//     finalArray.push(array1[i]);
//     i++;

// }

// while(j<array2.length){
//     finalArray.push(array2[j]);
//     j++
// }


// console.log(finalArray);

/*********************** End section   ************************************
 ************************************************************************** 
 ************************************************************************** 
*/


/***    Union of array with handling of duplicate in both of the array 
 *      1. Find the largest element from the two array by comparing the last element of two arrays
 *      2. Declare a count array to keep track the number of occurance for each element. Array size is the maximum element + 1 . 
 *      3. push the first element of 1st array to result array and increase the count for that element
 *      4. do a for loop for the first array , compare each element to it's adjacent element. If adjacent element is not matched then push that 
 *      element to result array and increase the count. 
 *      5. Now do a for loop for the 2nd array, check the occurance count for each element of that array. If occurance is zero only then push that 
 *      element to result array and increase it's count. 
 *      6. Print the result array.
 */

let array1 = [1, 3, 3 , 4,4,4, 4, 5,5,5,5, 7];
let array2 = [2,2,2,2,2,2,2, 3, 5, 6];

let arrayUnion = () =>{
    let array1max = array1[array1.length-1];
    let array2max = array2[array2.length-1];

    let finalArray = [];

    let maxElement = array1max > array2max ? array1max : array2max; 

    let countTable = new Array(maxElement+1).fill(0);

    finalArray.push(array1[0]);
    ++countTable[array1[0]];

    for(let i=1;i<array1.length;i++){
        if(array1[i] != array1[i-1]){
            finalArray.push(array1[i]);
            ++countTable[array1[i]];
        }
    }

    for(let i=0;i<array2.length;i++){
        if(countTable[array2[i]] == 0){
            finalArray.push(array2[i]);
            ++countTable[array2[i]];
        }
    }


    console.log(finalArray);
}

arrayUnion();