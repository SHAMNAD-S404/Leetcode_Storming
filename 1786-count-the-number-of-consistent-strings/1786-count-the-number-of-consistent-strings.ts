function countConsistentStrings(allowed: string, words: string[]): number {

    const allowedSet = new Set(allowed);
    let count : number = 0;

    for(const word of words){
        
        let consist = true;

        for(const char of word){
            if(!allowedSet.has(char) ){
                consist = false;
                break;
            }
        }

        if(consist) count++;
    }
    return count;

};