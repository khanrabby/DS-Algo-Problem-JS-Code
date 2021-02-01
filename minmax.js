// let givenArray = [5,7,1,3,5,2,10,100,999];

// let maximum = givenArray[0], minimum = givenArray[0]; 



// for(let i=0;i<givenArray.length ; i++){
//     if(givenArray[i]>maximum) maximum = givenArray[i];

//     if(givenArray[i]<minimum) minimum = givenArray[i];
// }

// console.log(`maximum = ${maximum} , minimum = ${minimum}`);


let givenArray = [82,36,49,91,12,14,6,76,92,55];

let max  = 0, min = 0 ; 

let minmax = async (array,start,end,max,min) =>{
    console.log(`start = ${start} , end = ${end}`);
    if(start == end){
        // if array has only one elements
        console.log('start == end');
        max = array[start];
        min = array[start];
        return {max : max, min : min};
        console.log(`start == end ,,,, maximum = ${max} , minimum = ${min}`);
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
        console.log(`start + 1 == end ,,,, maximum = ${max} , minimum = ${min}`);
        return {max : max, min : min};
    }
    

    if(end - start > 2 ){
        console.log('end - start > 2');
        let mid = Math.floor (( start + end ) / 2 );
        console.log(`mid = ${mid}`);
        let leftPair = await minmax(array,start,mid); // left sub array
        console.log(`left pair ${leftPair}`);
        let rightPair = await minmax(array,mid+1,end);
        console.log(`right pair ${rightPair}`);
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
    console.log(`final ---------------- maximum = ${finalPair.max} , minimum = ${finalPair.min}`);
};

result();

