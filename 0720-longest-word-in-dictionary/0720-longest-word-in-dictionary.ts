function longestWord(words: string[]): string {

    // Sort words by length and lexicographical order
    words.sort((a, b) => a.length === b.length ? a.localeCompare(b) : a.length - b.length);
    
    let validWords = new Set([""]); // Initialize with an empty string
    let result = "";
    
    for (let word of words) {
        // Check if the word's prefix is in the valid set
        if (validWords.has(word.slice(0, word.length - 1))) {
            validWords.add(word); // Add the word to the valid set
            // Update result if this word is longer or lexicographically smaller
            if (word.length > result.length || (word.length === result.length && word < result)) {
                result = word;
            }
        }
    }
    
    return result;
    
};