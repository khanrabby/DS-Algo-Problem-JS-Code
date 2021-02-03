/** Intersection of two sorted arrays , below solution do not handle duplicate items
 *      1) Use two index variables i and j, initial values i = 0, j = 0 
        2) If arr1[i] is smaller than arr2[j] then increment i. 
        3) If arr1[i] is greater than arr2[j] then increment j. 
        4) If both are same then print any of them and increment both i and j.
 */

// let array1 = [1, 3, 4,5, 7];
// let array2 = [2, 3, 5, 6];

// let finalArray = [];

// let arrayIntersection = () => {
//     let i = 0, j = 0;

//     while (i < array1.length && j < array2.length) {
//         if (array1[i] < array2[j]) {
//             i++;
//         }
//         else if (array1[i] > array2[j]) {
//             j++;
//         }
//         else {
//             finalArray.push(array1[i]);
//             i++; j++;
//         }
//     }
// }

// arrayIntersection(); 

// console.log(finalArray);

/************************************end section *****************************************
 *****************************************************************************************
 *****************************************************************************************
*/


/*****************************************************************************************
 * Intersection of two sorted arrays, handling of duplicate items
 * To handle duplicates just check whether current element is already present in intersection list. We are checking the previous 
 * item of the result array because in this case we are trying to find intersection of two sorted arrays.
 *****************************************************************************************
*/


let array1 = [1, 2, 2, 3, 4, 44, 44];
let array2 = [2, 2, 4, 6, 7, 8 , 44,4];

let finalArray = [];

let arrayIntersection = () =>{

    let i=0,j=0;

    while(i<array1.length && j<array2.length){
        if(array1[i]<array2[j]){
            i++;
        }
        else if(array1[i]>array2[j]){
            j++;
        }
        else{
            console.log(`matched element ${array1[i]}`);
            if(finalArray.length > 0 && finalArray[finalArray.length-1] == array1[i]){
                i++; j++;
            }
            else{
                finalArray.push(array1[i]);
                i++ ; j++;
            }
        }
    }

    console.log(finalArray);
}

arrayIntersection();