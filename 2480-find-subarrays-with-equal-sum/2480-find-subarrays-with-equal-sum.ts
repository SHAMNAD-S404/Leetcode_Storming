function findSubarrays(nums: number[]): boolean {
      const seen = new Set<number>();

    for (let i = 0; i < nums.length - 1; i++) {
        const sum = nums[i] + nums[i + 1];

        if (seen.has(sum)) {
            return true;
        }
        
        seen.add(sum);
    }

    return false;
};