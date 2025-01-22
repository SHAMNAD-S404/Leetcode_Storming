function convertDateToBinary(date: string): string {

    return date.split("-").map( val => Number(val).toString(2)).join("-");
    
};