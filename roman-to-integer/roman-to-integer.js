/**
 * @param {string} s
 * @return {number}
 */

    
var romanToInt = function(s) {
    
    let symbols = { 
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
                  }
    
    let sum = 0;
    
    for(let i =0; i<s.length;i++){
        const char = s[i];
        const nextChar = s[i+1];
       
        if(symbols.hasOwnProperty(char+nextChar)){
           sum += symbols[char+nextChar];
            i++;
            continue;
        }
        
        sum+=symbols[char]
    }
    
    return sum;
    
};