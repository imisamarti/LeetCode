/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
//     //splice()
//     for(let i = 0; i<nums.length;i++){
        
//         if(nums[i] === val ){
//             nums.splice(i, 1);
//             i--;
//         }
        
//     }
    
//     console.log(nums)
    
    var zeroStartIdx = 0;
    
    for(let i=0;i<nums.length;i++){
        
        if(nums[i]!==val){
            //console.log(nums[i]);
            nums[zeroStartIdx]=nums[i];
            zeroStartIdx++
        }
    }
    
    console.log(zeroStartIdx)
    return zeroStartIdx; 
   
    
    
};

 