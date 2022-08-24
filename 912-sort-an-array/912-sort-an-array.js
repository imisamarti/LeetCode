/**
 * @param {number[]} nums
 * @return {number[]}
 */

function sortArray(arr){
    //base case
    if(arr.length <= 1) return arr;
    
    const iPivot = randomNumberBetween(0, arr.length-1);
    const [left,right] = partition(arr,iPivot);
    
    const sortedLeft = sortArray(left);
    const sortedRight = sortArray(right);
    
    return sortedLeft.concat(arr[iPivot], sortedRight);
    
}

function partition(arr,iPivot){
    const vPivot = arr[iPivot];
    const left = [];
    const right = [];
    
    for(let i =0; i <arr.length;i++){
        if(i === iPivot) continue;
        
        const val = arr[i];
        
        if(val <= vPivot) left.push(val);
        else right.push(val);
    }
     return [left,right] ;  
        
    }
    

function randomNumberBetween(min,max){
    return Math.floor(Math.random()*(max+1-min))+min;
}
