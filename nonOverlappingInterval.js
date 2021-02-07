
/********** Find Non-overlapping intervals among a given set of intervals **********************
 * Given N set of time intervals, the task is to find the intervals which don’t overlap with the given set of intervals.
 * Examples:
 *  Input: interval arr[] = { {1, 3}, {2, 4}, {3, 5}, {7, 9} }
    Output:
    [5, 7]
    Explanation:
    The only interval which doesn’t overlaps with the other intervals is [5, 7].

    Input: interval arr[] = { {1, 3}, {9, 12}, {2, 4}, {6, 8} }
    Output:
    [4, 6]
    [8, 9]
    Explanation:
    There are two intervals which don’t overlap with other intervals are [4, 6], [8, 9].
 * ***********/


//let input = [[1, 3], [2, 4], [3, 5], [7, 9] ]

let input = [[1, 3], [9, 12], [2, 4], [6, 8] ]

let nonOverlappingInterval = [];


let merge = async (array , start, medium,end)=>{   

    let leftSubArray = new Array(medium - start + 1);
    let rightSubArray = new Array(end-medium); 

    for(let i=0;i<leftSubArray.length;i++){
        leftSubArray[i]=array[start + i];
    }

    for(let i=0;i<rightSubArray.length;i++){
        rightSubArray[i] = array[medium + 1 + i];
    }

    let i=0,j=0;
    let k=start; 

    while(i<leftSubArray.length && j<rightSubArray.length){
        if(leftSubArray[i][0]<rightSubArray[j][0]){
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

let mergeSort = async (array,start,end)=> {
    if(start<end){
        let medium = Math.floor((start + end) / 2); 
        mergeSort(array,start,medium);
        mergeSort(array,medium+1,start);
        await merge(array,start,medium,end);
    }
}

let findNonOverlappingList = async ()=>{
    await mergeSort(input, 0, input.length-1);
    
    // we are assuming that given input list's length is greater than 1
    for (let i = 1; i < input.length; i++) {
        if (input[i][0] > input[i - 1][1] || input[i - 1][0] > input[i][1]) {
            // interval intersection is not empty
            overlapExist = false;
            nonOverlappingInterval.push([input[i-1][1],input[i][0]]);
        }
        else {
            continue
        }
    }


    console.log(nonOverlappingInterval)

    
}

findNonOverlappingList();


/************************************* End of code  ********************************************************/