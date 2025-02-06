/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {


    let max = 0;

    function getLength(value){
        if(isNaN(value)){
            return value.length;
        }else{
            return Number(value);
        }
    }
    
    for(let i=0;i<strs.length;i++) {

        let getValue = getLength(strs[i])

        max = getValue > max ? getValue  : max ;
    }

    return max;
    
};