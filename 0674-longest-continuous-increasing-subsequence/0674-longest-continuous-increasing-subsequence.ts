function findLengthOfLCIS(nums: number[]): number {

    let size : number = 1 ;
    let count = 1 ;
    
    for(let i=0; i<nums.length - 1; i++){  
        if(nums[i] < nums[i+1]){
            count++;
            size = count > size ? count : size;
        }else{
            count = 1;
        }
    }
    return size;
    
};