/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    
    //use reverse for flip
    
    //to flip make 0 == 1 and 1 ==0
    
 for(let row in image){
     image[row] = image[row].reverse();
     image[row] = image[row].map(x => 1-x);
 }
    return image;
    
};