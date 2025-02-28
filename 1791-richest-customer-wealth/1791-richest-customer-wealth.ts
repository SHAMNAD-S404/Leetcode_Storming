function maximumWealth(accounts: number[][]): number {

    let max : number = -Infinity
    for (const num of accounts){
        let sum = num.reduce((acc,curr) => acc+curr ,0);
        max = sum > max ?  sum : max;
    }

    return max;
    
};