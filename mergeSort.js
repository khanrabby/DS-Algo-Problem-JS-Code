
let givenArray = [38,27,43,3,9,82,10];

let merge = (array,left,middle,right) =>{

    let leftSubArray = new Array(middle - left + 1);
    let rightSubArray = new Array(right - middle);


    for(let i=0;i<leftSubArray.length;i++){
        leftSubArray[i] = array[left+i];
    }

    for(let i=0;i<rightSubArray.length;i++){
        rightSubArray[i] = array[middle+i+1];
    }

    let i=0,j = 0;

    let k = left; 

    while(i<leftSubArray.length && j<rightSubArray.length){
        if(leftSubArray[i]<rightSubArray[j]){
            array[k] = leftSubArray[i];
            i++;
        }
        else{
            array[k] = rightSubArray[j];
            j++;
        }
        k++;
    }

    while(i<leftSubArray.length){
        array[k] = leftSubArray[i];
        i++;
        k++;
    }

    while(j<rightSubArray.length){
        array[k] = rightSubArray[j];
        j++;
        k++;
    }

}

let mergeSort = (array,left,right) =>{
    
    if(left < right){
        let middle = Math.floor((left+right) /2 );

        mergeSort(array,left,middle);
        mergeSort(array,middle+1,right);

        merge(array,left,middle,right);
        
    }
    
}


mergeSort(givenArray,0,givenArray.length-1);

console.log(givenArray);