function twoSum(nums: number[], target: number): number[] {

    const diffMap  = new Map<number,number>();

    for (let i=0; i<nums.length; i++) {

        let difference = target - nums[i];

        if(diffMap.has(difference) ){
            return [ diffMap.get(difference), i ];
        }

        diffMap.set(nums[i],i)
    }
    
};