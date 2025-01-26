function canConstruct(ransomNote: string, magazine: string): boolean {
    
    //step 1 : count the numbers in magazine
    const freqMap : {[key:string] : number} = {};

    for (const char of magazine){
        freqMap[char] = ( freqMap[char] || 0 ) +1 ;
    }

    //step 2 : check can we construct ransomNote with magazine

    for(const char2 of ransomNote){
        if(!freqMap[char2] ){
            return false
        }else{
            freqMap[char2]--;
        }
    }
    return true;
};