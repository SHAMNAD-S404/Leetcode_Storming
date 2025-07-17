function missingInteger(nums: number[]): number {

    let seqSum : number = nums[0];
    for(let i =1; i<nums.length; i++){
        if(nums[i] === nums[i-1] + 1){
            seqSum += nums[i]
        }else{
            break;
        }
    }

    const countMap = new Set(nums)

    let x = seqSum;
    while(countMap.has(x)){
        x++
    }
    return x;
    
};