/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    //create a variable to hold maxWealth so far
    let maxWealth = 0;
    
    //for loop to iterate through list of customers
    for(let i = 0; i<accounts.length;i++){
        //create variable to hold sum of accounts per customer
        let sum = 0;
        //create another loop to iterate though customers accounts
        
        for(let j = 0; j<accounts[i].length;j++){
            sum += accounts[i][j];
            
            
        }
        
        //if the sum of the accounts is biggest than the current wealth then replace current wealth with sum
        if(maxWealth < sum){
            maxWealth = sum;
        }
    }
    
    return maxWealth
    
};