function finalValueAfterOperations(operations: string[]): number {

    let value : number  = 0;
    for(const x of operations){
        if(x === "X--" || x === "--X"){
            value -= 1;
        }else{
            value += 1;
        }
    }
    return value ;
    
};