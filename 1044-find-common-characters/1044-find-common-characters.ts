function commonChars(words: string[]): string[] {

    if (words.length === 0) return [];
    let result = words[0].split('');

    for (let i = 1; i < words.length; i++) {
        const currentWordChars = words[i].split('');
        
        // Filter result to keep only characters that appear in current word
        result = result.filter(char => {
            const index = currentWordChars.indexOf(char);
            if (index !== -1) {
                // Remove the matched character to handle duplicates correctly
                currentWordChars.splice(index, 1);
                return true;
            }
            return false;
        });
        if (result.length === 0) return [];
    }

    return result;
    
};