function hasAlternatingBits(n: number): boolean {

    let binary = n.toString(2); // Convert number to binary string
    for (let i = 1; i < binary.length; i++) {
        // Check if the current bit is the same as the previous bit
        if (binary[i] === binary[i - 1]) {
            return false;
        }
    }
    return true;
    
};