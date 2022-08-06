/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
    let a =[];
    
    for(let i =0; i< nums.length; i++){
        let counter = 0
        
        for(let j =0; j < nums.length; j++){
             if(nums[j] < nums[i] && i != j){
                counter++
            } 
        }
        a.push(counter)
    }
    return a;
};