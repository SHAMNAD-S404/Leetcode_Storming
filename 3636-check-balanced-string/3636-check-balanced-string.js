/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {

    let evenTotal = 0;
    let oddTotal  = 0;

    for(let i=0;i<num.length;i++){
        if(i % 2 == 0){
            evenTotal = evenTotal+ Number(num[i])
        }
        if( i % 2 === 1){
            oddTotal = oddTotal+ parseInt(num[i])
        }
    }

    return evenTotal == oddTotal
    
};