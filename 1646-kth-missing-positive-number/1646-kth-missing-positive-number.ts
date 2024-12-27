function findKthPositive(arr: number[], k: number): number {
    

    let result : number[] = [];
    let i = 1;
    
    while(result.length < k){

        if( ! arr.includes(i) ){
            result.push(i)
        }
        i++;
    }

    return result[k-1]
};