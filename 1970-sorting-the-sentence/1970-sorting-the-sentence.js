/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {

    const arr = s.split(" "); //converting to array
    let result = [] ; 

    //sorting the array of string based on the last number in ascending order
    const sort = arr.sort((a,b) => a.split("").pop() - b.split("").pop() );

    for(let i = 0 ; i<sort.length ;i++){  
        result.push( sort[i].slice(0,-1) ); //addding the string to array except that last integer
    }

    return result.join(" ")   
};