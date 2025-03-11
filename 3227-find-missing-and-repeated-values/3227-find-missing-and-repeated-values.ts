function findMissingAndRepeatedValues(grid: number[][]): number[] {

    const arr : number [] = grid.flat();
    const result : number [] = [];
    const seen  = new Set<number>();

    //1. using set to track the duplicate number
    for(const num of arr){
        if( seen.has(num) ){
            result.push(num)
            break;
        }else{
            seen.add(num)
        }
    }

    //2. finding the missed value from the array;
    for(let i = 1 ; i<= arr.length ;i++){
        if( !arr.includes(i) ){
            result.push(i);
            break;
        }
    }
    //3. return result
    return result ;
    
};