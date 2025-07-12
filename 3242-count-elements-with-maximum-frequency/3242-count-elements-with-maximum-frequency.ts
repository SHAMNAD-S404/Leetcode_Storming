function maxFrequencyElements(nums: number[]): number {

    const map = new Map<number,number>();

    for(const num of nums){

        if(!map.has(num)){
            map.set(num,1)
        }else{
            map.set(num,map.get(num)+1) ;
        }
    }
    // step 2 : sort key values
    const myMap = Array.from(map).sort((a,b) => b[1] - a[1]);

    //step 3 : find max frequency
    const maxFrequency : number = myMap[0][1];

    // step 4 : loop through the array and find the total sum
    let sum : number = 0;
    for(const [num,freq] of myMap){
        if(freq === maxFrequency){
            sum += freq;
        }
    }
    
    return sum
};