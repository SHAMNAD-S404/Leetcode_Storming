/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {

    let n = nums.length;
    let diff = new Array(n + 1).fill(0);

    for (let i = 0; i < queries.length; i++) {
        let start = queries[i][0];
        let end = queries[i][1];

        diff[start] -= 1;
        if (end + 1 < n) {
            diff[end + 1] += 1;
        }
    }

    for (let i = 0; i < n; i++) {
        
        if (i > 0) {
            diff[i] += diff[i - 1];
        }

        nums[i] += diff[i];
        if (nums[i] < 0) {
            nums[i] = 0; 
        }
    }

    return nums.every(num => num === 0);
};