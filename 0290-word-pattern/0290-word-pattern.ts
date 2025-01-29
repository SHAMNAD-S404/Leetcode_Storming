function wordPattern(pattern: string, s: string): boolean {

     // Split the string into words
    const words = s.split(' ');
    
    // If lengths don't match, pattern can't be followed
    if (pattern.length !== words.length) {
        return false;
    }
    
    // Create two maps for bidirectional mapping
    const charToWord = new Map<string, string>();
    const wordToChar = new Map<string, string>();
    
    // Check each character and word pair
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];
        
        // If char is seen before
        if (charToWord.has(char)) {
            // Check if it maps to the same word
            if (charToWord.get(char) !== word) {
                return false;
            }
        } 
        // If char is not seen before
        else {
            // Check if word is already mapped to another char
            if (wordToChar.has(word)) {
                return false;
            }
            // Create new mapping
            charToWord.set(char, word);
            wordToChar.set(word, char);
        }
    }
    
    return true;
    
};