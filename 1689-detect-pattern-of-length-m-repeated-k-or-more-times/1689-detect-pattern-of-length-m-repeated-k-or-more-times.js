/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
    
    for (let i = 0; i + m * k <= arr.length; i++) {
        let j;
        // Check if pattern repeats k times
        for (j = 0; j < m * k; j++) {
            if (arr[i + j] !== arr[i + (j % m)]) {
                break;
            }
        }
        
        // If pattern repeated k times completely
        if (j === m * k) {
            return true;
        }
    }
    
    return false;

    
};