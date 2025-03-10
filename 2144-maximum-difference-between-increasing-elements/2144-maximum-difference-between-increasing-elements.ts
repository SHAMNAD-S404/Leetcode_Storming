function maximumDifference(nums: number[]): number {

   let maxValue:number = nums[0];
   let maxDifference : number = -1;

   for(let i=1; i<nums.length; i++){
        if(nums[i] > maxValue ){
            maxDifference = Math.max(maxDifference , nums[i] - maxValue)
        }else{
            maxValue = nums[i]
        }
   }

   return maxDifference; 
};