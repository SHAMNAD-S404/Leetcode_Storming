/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {

    let seenB = false; // Track if we have encountered a 'b'
    
    for (let char of s) {
        
        if (char === 'b') {
            seenB = true; // Start tracking 'b'
        }
        if (char === 'a' && seenB) {
            return false; // 'a' after 'b' found
        }
    }
    
    return true; // No violations found
};