function maxFrequencyElements(nums: number[]): number {

    const map = new Map<number,number>();
    let maxFreq : number = 0;

    //step 1 : Loop through array and find max frequencies and its count
    for(const num of nums){
        const count = (map.get(num) || 0) + 1;
        map.set(num,count); //updating map
        // updating the maxFreq to get the highest frequency
        maxFreq = Math.max(maxFreq,count) 
    }

    //step 2 : loop through the Map and find which elements have same freq and count it.
    let total : number = 0;
    for( const value of map.values() ){
        if(value === maxFreq){
            total += value;
        }
    }
    return total;
    
};