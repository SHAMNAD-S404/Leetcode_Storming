function maximumCount(nums: number[]): number {
    
    let neg : number = 0;
    let pos : number = 0;

    for(const num of nums){
        if(num > 0){
            pos++
        }else if(num < 0){
            neg++
        }
    }
    return Math.max(neg,pos);

};