function maxAscendingSum(nums: number[]): number {

    let sum : number = 0;
    let total : number = nums[0];

    if(nums.length === 1) return nums[0];

    for(let i=0; i<nums.length -1; i++){
           
        if(nums[i] < nums[i+1]){
            total += nums[i+1]
            sum = sum > total ? sum : total;
        }else{
            sum = total > sum ? total : sum;
            total = nums[i+1]
        }
    }
    return sum;
};