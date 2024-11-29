/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {

      // Step 1: Count word frequencies
    const frequencyMap = new Map();
    for (const word of words) {
        frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
    }

    // Step 2: Sort by frequency, then lexicographically
    const sortedWords = Array.from(frequencyMap.keys()).sort((a, b) => {
        const freqA = frequencyMap.get(a);
        const freqB = frequencyMap.get(b);
        if (freqA === freqB) {
            return a.localeCompare(b); // Lexicographical order for same frequency
        }
        return freqB - freqA; // Higher frequency first
    });

    // Step 3: Return the top k words
    return sortedWords.slice(0, k);
    
};