/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    
    let count = 0
    
    for(let x of operations){
        
        if(x === "X++") count++ 
        else if(x === "++X") count++
        else if(x === "--X") count--
        else if(x === "X--") count--
        
    }
    
    return count
};