function combinationSum4(nums: number[], target: number): number {

     // Create a DP array of size target + 1, initialized to 0
    let dp = new Array(target + 1).fill(0);

    // Base case: there is one way to achieve a target of 0
    dp[0] = 1;

    // Iterate over all possible target values from 1 to the given target
    for (let t = 1; t <= target; t++) {
        // Check each number in the nums array
        for (let num of nums) {
            // If the number can contribute to the current target (t), add combinations
            if (t - num >= 0) {
                dp[t] += dp[t - num];
            }
        }
    }

    // The value at dp[target] contains the total combinations
    return dp[target];
    
};