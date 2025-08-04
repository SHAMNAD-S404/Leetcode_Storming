/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {

    const map = {}

    for(const num of nums){
        if(num%2===0){
            map[num] = (map[num] |0)+1;
        }      
    }
    if(Object.keys(map).length > 0){
        const most = Object.entries(map).sort((a,b) => b[1] - a[1])[0];
        return Number(most[0])
    }
    return -1
       
};