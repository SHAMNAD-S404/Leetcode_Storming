function shortestCompletingWord(licensePlate: string, words: string[]): string {
    

     // Function to count frequency of letters in a string
    function countFrequency(str: string): Record<string, number> {
        const frequency: Record<string, number> = {};
        for (const char of str) {
            frequency[char] = (frequency[char] || 0) + 1;
        }
        return frequency;
    }

    // keep only letters and convert to lowercase
    const normalizedPlate = licensePlate
        .toLowerCase()
        .replace(/[^a-z]/g, "");

    // Count frequency of letters in the license plate
    const plateFreq = countFrequency(normalizedPlate);

    // Function to check if a word meets the requirements
    function isCompletingWord(word: string): boolean {
        const wordFreq = countFrequency(word);
        for (const [char, count] of Object.entries(plateFreq)) {
            if ((wordFreq[char] || 0) < count) return false;
        }
        return true;
    }

    // Find the shortest completing word
    let result = "";
    for (const word of words) {
        if (
            isCompletingWord(word) &&
            (result === "" || word.length < result.length)
        ) {
            result = word;
        }
    }

    return result;
};