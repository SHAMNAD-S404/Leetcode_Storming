function singleNumber(nums: number[]): number {

    for( const num of nums){
        if( nums.indexOf(num) === nums.lastIndexOf(num) ){
            return num;
        }
    }
    
};