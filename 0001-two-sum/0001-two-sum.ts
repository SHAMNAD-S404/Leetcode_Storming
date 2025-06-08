function twoSum(nums: number[], target: number): number[] {

    //1. Initialize Map structure for storing difference with indices
    const diffMap = new Map <number, number>();

    //2. loop through each array elements
    for (let i=0; i<nums.length; i++){

        //3. find the difference
        let difference = target - nums[i];

        //4. check for its exist then return indices
        if( diffMap.has(difference) ){
            return[i,diffMap.get(difference) ]
        }

        //5. If its didn't exist add the difference and indices to the map
        diffMap.set(nums[i],i)

    }    
};