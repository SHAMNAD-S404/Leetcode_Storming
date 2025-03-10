function findErrorNums(nums: number[]): number[] {

    const result : number[] = [];

    const uniq  = new Set<number>();
   

    for(const num of nums){
        if(uniq.has(num)){
           result.push(num)
            break;
        }else{
            uniq.add(num)
        }
    }

    const size = nums.length

    for(let i=1 ; i<=size ; i++){
        if( !nums.includes(i) ){
            result.push(i)
            break
        }
    }
    return result;
    
};