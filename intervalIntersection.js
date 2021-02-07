/** Find the intersection of given intervals */


let intervalArray = [[1, 6] , [8,18]]; // [2, 8], [3, 10], [5, 8]

let initialLeft = intervalArray[0][0];
let initialRight = intervalArray[0][1]

let resultIntersection = [];


let getSmallerElement = (a,b)=>{
    return a>b ? b : a; 
}

let getLargerElement = (a,b)=>{
    return a>b ? a : b; 
}

for(let i=1;i<intervalArray.length;i++){
    if(initialLeft>intervalArray[i][1] || intervalArray[i][0]>initialRight){
        continue;
    }
    else{
        resultIntersection[0] = getLargerElement(initialLeft,intervalArray[i][0]);
        resultIntersection[1] = getSmallerElement(initialRight,intervalArray[i][1]);
    }
}

console.log(resultIntersection);


/********************************  end of intersection of intervals *********************************************/



