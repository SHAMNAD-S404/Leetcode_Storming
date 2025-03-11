function findMissingAndRepeatedValues(grid: number[][]): number[] {

    const arr : number [] = grid.flat();
    const result : number [] = [];
    const seen  = new Set<number>();

    for(const num of arr){
        if( seen.has(num) ){
            result.push(num)
            break;
        }else{
            seen.add(num)
        }
    }


    for(let i = 1 ; i<= arr.length ;i++){
        if( !arr.includes(i) ){
            result.push(i);
            break;
        }
    }

    return result ;
    
};