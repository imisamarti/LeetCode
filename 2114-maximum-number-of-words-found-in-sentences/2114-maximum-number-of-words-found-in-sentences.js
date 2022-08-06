/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    
    //i gotta put the count inside the first iteration
    //for it to only count the first iteration
    //then break and go to the second one
    
    let a =[]
    
    for(let sentence of sentences){
        
    let count =0;
        
    for(let i =0; i<sentence.length;i++){
        
        if(sentence[i] ===" "){
            count++
            }
        }
        
    a.push(count+1)
    }
    
    return Math.max(...a)
    
};