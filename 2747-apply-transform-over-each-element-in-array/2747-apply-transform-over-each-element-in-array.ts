function map(arr: number[], fn: (n: number, i: number) => number): number[] { 
    
    return arr.map( (num,index) => fn(num,index) );
};