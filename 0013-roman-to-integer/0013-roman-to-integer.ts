function romanToInt(s: string): number {

    // here created a hashmap to store roman integers and value
    const romanMap :{[key:string] : number} = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    };

    let total : number = 0;
    for(let i=0; i<s.length; i++){

        const current = romanMap[s[i]];  //fetching current value
        const next  = romanMap[ s[i+1]];  //fetching next value

        if(current < next) {    //roman value aligned from largest to small from left to right
            total -= current;
        }else{
            total += current;
        }
    }

    return total;    
};