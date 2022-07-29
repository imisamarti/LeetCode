/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let firstS = s.split('').sort().toString(); 
    let secondS = t.split('').sort().toString();
    
    
    if(firstS == secondS){
        return true
    } else return false
    
};