/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    
    for(let i =0; i<s.length; i++){
        let char = s[i];
        
        if(!map[char]) map[char] = 1;
        else map[char]++
        
    }
    
    for(let j = 0; j<s.length;j++){
        if(map[s[j]] === 1) return j;
    }
    
    return -1;
    
};