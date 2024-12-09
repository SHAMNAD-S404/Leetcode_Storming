function titleToNumber(columnTitle: string): number {
    
    let result : number  = 0;
    
    for(let i =0; i<columnTitle.length; i++){

        const value = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
        result = result * 26 + value;
    }

    return result;
};