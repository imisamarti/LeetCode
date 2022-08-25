/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
   if(s.length <= 0) return 0;
    
    let left = 0;
    let right = 0;
    let maxLength = -Infinity;
    const set = new Set();
    
    while(right < s.length){
        let rightSide = s[right];
        let leftSide = s[left];
        
        if(!set.has(rightSide)){
            set.add(rightSide)
            right++
            maxLength = Math.max(maxLength,set.size);
        } else{
            set.delete(leftSide);
            left++
        }
        
    }
    return maxLength;
};