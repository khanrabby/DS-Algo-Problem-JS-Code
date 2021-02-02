/** Input */

let array1 = [1, 3, 3 ,  4, 5, 7];
let array2 = [2, 3, 5, 6];

let finalArray = [];

let i=0,j=0;



while(i<array1.length && j<array2.length){
    if(array1[i]< array2[j]){
        // array1 element is greater than 
        console.log(`array1[i]< array2[j]`)
        finalArray.push(array1[i]);
        i++;
    }
    else if(array1[i] == array2[j]){
        console.log(`array1[i] == array2[j]`)
        finalArray.push(array1[i]);
        i++;
        j++;
    }
    else{
        console.log(`array2[j] > array1[i] `)
        finalArray.push(array2[j]);
        j++;
    }


    console.log(`finalarray = ${finalArray}`);
}

while(i<array1.length){
    finalArray.push(array1[i]);
    i++;

}

while(j<array2.length){
    finalArray.push(array2[j]);
    j++
}


console.log(finalArray);