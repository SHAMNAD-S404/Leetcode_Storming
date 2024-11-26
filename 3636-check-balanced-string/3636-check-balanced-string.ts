function isBalanced(num: string): boolean {

    //converting string to Array
    const numArray : number[] = num.split("").map( no => Number(no) )
    const size : number = numArray.length;
    let evenSum : number = 0;
    let oddSum : number = 0;
    
    for(let i=0; i<size; i++){
        
        if( i%2 === 1 ){
            oddSum += numArray[i];
        }else{
            evenSum += numArray[i];
        }
    }

    return oddSum === evenSum;
    
};