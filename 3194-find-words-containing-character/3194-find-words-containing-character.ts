function findWordsContaining(words: string[], x: string): number[] {

    return words.map((word , index) => word.includes(x) ? index : -1 ).
            filter(index => index !== -1)
    
};