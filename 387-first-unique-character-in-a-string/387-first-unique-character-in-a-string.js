/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let map  = new Map();
    
    for(let i =0; i<s.length;i++){
        
        let char = s.charAt(i);
        
        if(!map.has(char)){
            map.set(char,1)
        } else {
            map.set(char,map.get(char)+1)
        }
    }
    
    for(let j =0; j<s.length;j++){
        if(map.get(s.charAt(j)) == 1){
            return j;
        }
        
    }
    
        return -1;
    
};
