/******************************************************************************* 
 * Finding maximum & minimum in an array using linear search method 
 * ******************************************************************************/

// let givenArray = [5,7,1,3,5,2,10,100,999];

// let maximum = givenArray[0], minimum = givenArray[0]; 



// for(let i=0;i<givenArray.length ; i++){
//     if(givenArray[i]>maximum) maximum = givenArray[i];

//     if(givenArray[i]<minimum) minimum = givenArray[i];
// }

// console.log(`maximum = ${maximum} , minimum = ${minimum}`);


/************************ end of linear search ********************************* 
 * *****************************************************************************
*/


/*****************************************************************************
 *  Finding maximum & minimum of an array using tournament method or by divide and conquer
 *  Divide the array into two parts and compare the maximums and minimums of the two parts to get the maximum and the minimum of the whole array.
 *  Pair MaxMin(array, array_size)
    if array_size = 1
      return element as both max and min
    else if arry_size = 2
        one comparison to determine max and min
        return that pair
    else    / array_size  > 2 /
        recur for max and min of left half
        recur for max and min of right half
        one comparison determines true max of the two candidates
        one comparison determines true min of the two candidates
        return the pair of max and min 
 * ***************************************************************************
 */
let givenArray = [82,36,49,91,12,14,6,76,92,55];

let max  = 0, min = 0 ; 

let minmax = async (array,start,end,max,min) =>{
    
    if(start == end){
        // if array has only one elements
        max = array[start];
        min = array[start];
        return {max : max, min : min};    
    }

    if(start + 1 == end){
        //if array has two elements
        if(array[start]>array[end]){
            // here , array[start] is the bigger one and array[end] is the smaller one
            max = array[start];
            min = array[end];
        }
        else{
            // here , array[start] is the smaller one and array[end] is the bigger one
            max = array[end];
            min = array[start];
        }
        return {max : max, min : min};
    }
    

    if(end - start > 2 ){
        
        let mid = Math.floor (( start + end ) / 2 );

        let leftPair = await minmax(array,start,mid); // left sub array
        let rightPair = await minmax(array,mid+1,end);
        
        if(leftPair.max > rightPair.max) 
        {
            max = leftPair.max;
        }
        else{
            max = rightPair.max;
        } 

        if(leftPair.min < rightPair.min){
            min = leftPair.min; 
        }else{
            min = rightPair.min;
        }

    }

    return {max : max , min: min};
}


let result  = async() =>{
    let finalPair = await minmax(givenArray,0,givenArray.length-1);
    console.log(` maximum = ${finalPair.max} , minimum = ${finalPair.min}`);
};

result();

/************************ section end ****************************************** 
 * *****************************************************************************
*/