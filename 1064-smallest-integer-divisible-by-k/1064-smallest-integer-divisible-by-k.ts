function smallestRepunitDivByK(k: number): number {
    
    // If k is even or divisible by 5, no such n exists
    if (k % 2 === 0 || k % 5 === 0) {
        return -1;
    }
    let remainder = 0;

    for (let length = 1; length <= k; length++) {
        remainder = (remainder * 10 + 1) % k;
        if (remainder === 0) {
            return length;
        }
    }

    return -1; // If no solution is found
};