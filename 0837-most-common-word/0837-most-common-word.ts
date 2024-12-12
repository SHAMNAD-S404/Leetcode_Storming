function mostCommonWord(paragraph: string, banned: string[]): string {


     // Convert the paragraph to lowercase and replace all non-alphanumeric characters with spaces
    const normalized = paragraph.toLowerCase().replace(/[^a-z]/g, ' ');

    // Split the paragraph into words
    const words = normalized.split(/\s+/).filter(word => word.length > 0);

    // Create a Set for banned words for quick lookup
    const bannedSet = new Set(banned);

    // Count the frequency of each word that is not banned
    const wordCount = new Map<string, number>();
    for (const word of words) {
        if (!bannedSet.has(word)) {
            wordCount.set(word, (wordCount.get(word) || 0) + 1);
        }
    }

    // Find the most common word
    let mostCommon = '';
    let maxCount = 0;
    for (const [word, count] of wordCount.entries()) {
        if (count > maxCount) {
            maxCount = count;
            mostCommon = word;
        }
    }

    return mostCommon;
    
};