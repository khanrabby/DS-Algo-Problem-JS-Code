"use strict"

/** Takeaway from this tutorial
 * 
 *  When you assign a string to a variable , it will act as read only.
 *  For example if you declare , var str = 'rabby'; 
 *  You can do console.log(str[0], str[1]);
 *  But you can not do, str[0] = 'a'; because indexed item in string is read only, you will not face any error if you run the script in normal mode.
 *  You will encounter error if you run the program/script in strict mode using "use strict" on top of the program.
 */


/******** array reversal using temporary array  *********/

// const givenArray = [1,2,3,4,5,6];
// const outputArray = [];

// for(let i=givenArray.length - 1; i>=-0 ;i--){
//     outputArray.push(givenArray[i]);
// }

// console.log(outputArray);

/************************ end   **********************/


/******** string reversal using temporary variable  *********/

// const givenArray = 'geeksforgeeks';
// let outputArray = '';

// for(let i=givenArray.length - 1; i>=-0 ;i--){
//     outputArray = outputArray +  givenArray[i];
// }

// console.log(outputArray);

/************************ end   **********************/



/******** array reversal by swaping  *****************/

// const givenArray = [1,2,3,4,5,6];

// let front , rear ; 

// for(let i=0;i<givenArray.length / 2 ;i++){
//     front = givenArray[i];
//     rear = givenArray[givenArray.length - i - 1 ];

//     givenArray[i] = rear;
//     givenArray[givenArray.length - i - 1 ] = front;

// }

// console.log(givenArray)

/************************ end   **********************/


/******** string reversal by swaping  *****************/

// let givenString = 'geeksforgeeks';

// let front,rear; 

// let setCharAt = (str ,index, char)=>{
//     str = str.substring(0,index) + char +  str.substring(index+1);
//     return str;
// }

// for(let i=0;i<givenString.length/2;i++){
//     front = givenString[i];
//     rear = givenString[givenString.length - i -1];
//     givenString = setCharAt(givenString,i,rear);
//     givenString = setCharAt(givenString,givenString.length - i -1, front);
// }

// console.log(givenString);


/************************ end   **********************/


/******** array reversal by swaping -> recursive version  *****************/

// const givenArray = [1,2,3,4,5,6];

// let reverseArray = (array, start , end) =>{

//     if(start > end) return;

//     let temp = array[start];
//     array[start] = array [end];
//     array[end] = temp; 

//     reverseArray(array, start +1 , end -1);
// }

// reverseArray(givenArray,0,givenArray.length-1);

// console.log(givenArray);


/*********************************** end   **********************************/


/******** string reversal by swaping -> recursive version  *****************/

let givenString = "geeksforgeeks"; 

let setCharAt = (str = '', index , char) =>{
    return str.substring(0,index) + char + str.substring(index+1);
}

let reverseString = (str,start,end) =>{
    if(start > end) {
        givenString = str;
        return;
    }
    
    let temp = str[start];
    str = setCharAt(str,start,str[end]);
    str = setCharAt(str,end,temp);
    
    reverseString(str, start + 1 , end-1);
}

reverseString(givenString,0,givenString.length-1)

console.log(givenString);

/*********************************** end   **********************************/