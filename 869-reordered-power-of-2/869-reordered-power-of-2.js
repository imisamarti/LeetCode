/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    
    let result = n.toString().split("").sort().join("");
    
    for(let i =0; i<30; i++){
        if((1 << i).toString().split("").sort().join("") === result) return true
    }
      return false
    
};

