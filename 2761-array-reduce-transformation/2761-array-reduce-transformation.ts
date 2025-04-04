type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {

    if(nums.length === 0) return init ;

    return nums.reduce( (num ,index) => {
        return fn(num,index); 
    },init);
    
};