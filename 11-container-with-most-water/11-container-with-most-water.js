/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    
let     left = 0,
        right = height.length-1,
        result = 0;
    
    while(left<right){
        let currentMaxHeightContainer = Math.min(height[left],height[right])
        let area = currentMaxHeightContainer *(right-left);
        
        result = Math.max(area,result)
        
        if(height[left]<height[right])left ++
        else right--
    }
    
    return result;
    
    
    
};