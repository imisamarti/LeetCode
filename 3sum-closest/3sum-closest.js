/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(A, target) {
        A.sort((a, b) => a - b);
    
    let closestSum = 0;
    let minSoFar = Infinity;

    for(let i = 0; i <A.length -2; i++) {
        let j = i + 1;
        let k = A.length - 1;
        
        while(j < k) {
            const sum = A[i] + A[j] + A[k];
            
            const diff = Math.abs(sum - target);
			//If minimum is found, update it in "minSoFar".
            if (diff < minSoFar) {
                minSoFar = diff;
                closestSum = sum;
            } 
            
            if(sum < target) {
               j++;
             } else {
                k--;
            }
        }
    }
    
    return closestSum;
};