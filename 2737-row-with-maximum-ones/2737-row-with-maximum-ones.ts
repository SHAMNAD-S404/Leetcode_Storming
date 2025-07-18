function rowAndMaximumOnes(mat: number[][]): number[] {

    const result : number[] = [];
    let max : number = 0;

    for(let i=0; i<mat.length; i++){

        let count : number = 0;
        for(let j=0; j<mat[i].length; j++){
            if(mat[i][j] === 1 ) {
                count++;
                if(count > max){
                    max = count;
                    result[0] = i;
                }
            }
        }
    }
    if(result.length == 0) result.push(0);
    result.push(max);
    return result;
    
};