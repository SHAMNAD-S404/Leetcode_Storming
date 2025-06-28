function smallerNumbersThanCurrent(nums: number[]): number[] {

    const sorted : number[] = [...nums].sort((a,b) => a-b );
    const map = new Map<number,number> ();

    for(let i=0; i<sorted.length; i++){
        if( !map.has(sorted[i]) ){
            map.set(sorted[i],i);
        }
    }

    return nums.map( (number) => map.get(number) );
    
};