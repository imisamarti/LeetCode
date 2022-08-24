/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
   //O(n) with map
    let result = {}
    
    for(let i =0; i<nums.length;i++){
        
        if(result[nums[i]] >= 0){
            return [result[nums[i]],i];
        }
        
        result[target-nums[i]] = i;
    }
};