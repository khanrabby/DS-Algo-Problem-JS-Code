/******************************** Check if any two intervals overlap among a given set of intervals *********************
 * An interval is represented as a combination of start time and end time. Given a set of intervals, check if any two intervals overlap.
 * Examples:
 *  Input:  arr[] = {{1, 3}, {5, 7}, {2, 4}, {6, 8}}
    Output: true
    The intervals {1, 3} and {2, 4} overlap


    Input:  arr[] = {{1, 3}, {7, 9}, {4, 6}, {10, 13}}
    Output: false
    No pair of intervals overlap. 

 * ************************************************************************************************************************/


 //let input = [[1, 3], [5, 7], [2, 4], [6, 8]]; // overlap exists

 let input = [[1, 3], [7, 9], [4, 6], [10, 13]]

 // sort the intervals 
 
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
 
 let isOverlapExists = async ()=>{
     await mergeSort(input, 0, input.length-1);
     console.log(input);
     let overlapExist = false; 
     if(input.length == 1){
         overlapExist =  false;
     }
     else{
         for(let i=1;i<input.length;i++){
             if(input[i][0]> input[i-1][1] || input[i-1][0]>input[i][1]){
                 // interval intersection is not empty
                 overlapExist = false;
             }
             else{
                 overlapExist = true; 
                 break;
             }
         }
     }
 
     console.log(overlapExist)
 
     return overlapExist;
 }
 
 isOverlapExists();


 /********************************** End of code section *************************************
  ********************************************************************************************
  ********************************************************************************************/