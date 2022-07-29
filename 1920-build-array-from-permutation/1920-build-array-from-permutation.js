/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    
    let newA = []
    
    for(let n of nums){
        newA[n] = nums[nums[n]]
    }
    
    return newA
    
};