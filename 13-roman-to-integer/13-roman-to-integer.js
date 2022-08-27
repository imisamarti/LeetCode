/**
 * @param {string} s
 * @return {number}
 */

    
var romanToInt = function(s) {
    
let roman = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "VI": 6,
    "IX": 9,
    "X": 10,
    "XL":40,
    "XC": 90,
    "L": 50,
    "CD":400,
    "CM":900,
    "C": 100,
    "D": 500,
    "M": 1000
};
    
    let result =0;
    
    for(let i =0; i<s.length;i++){
        let char = s[i];
        let nextChar = s[i+1];
        
        if(roman[char]<roman[nextChar]){
            result += roman[char+nextChar];
            ++i;
        } else result += roman[char]; 
    }

    return result;
    
};