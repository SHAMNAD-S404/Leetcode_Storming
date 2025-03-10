function maxSum(nums: number[]): number {
    
    const hashMap : {[key:number] : number[]} = {}
    let maxSum : number = -1;

    for(const num of nums){
        let maxDigit = Math.max(...num.toString().split("").map(Number) ) //to find a max number to assign as key
        if( !hashMap[maxDigit]) hashMap[maxDigit] = [];
        hashMap[maxDigit].push(num);
    }

    for(const key in hashMap){
        const values = hashMap[Number(key)]
        if(values.length > 1){
            values.sort((a,b) => b-a )
            maxSum = Math.max(maxSum,values[0] + values[1])
        }
    }
    return maxSum;


};