/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {

    const arr = s.split(" ")
    let result = []

    const sort = arr.sort((a,b) => a.split("").pop() - b.split("").pop() )

    for(let i=0; i<sort.length; i++){
        result.push(sort[i].slice(0,-1))
    }

    return result.join(" ")
    
};