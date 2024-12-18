function isPossibleDivide(nums: number[], k: number): boolean {

    if (nums.length % k !== 0) return false;

    const freqMap: Map<number, number> = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    const sortedKeys = Array.from(freqMap.keys()).sort((a, b) => a - b);
    for (const num of sortedKeys) {
        const count = freqMap.get(num) || 0;
        if (count > 0) {
    
            for (let i = num; i < num + k; i++) {
                if ((freqMap.get(i) || 0) < count) {
                    return false;
                }
                freqMap.set(i, (freqMap.get(i) || 0) - count);
            }
        }
    }

    return true;
};