function isOneBitCharacter(bits: number[]): boolean {

     let i = 0;
    while (i < bits.length - 1) {
        // If it's 1, skip two bits; otherwise, skip one bit
        if (bits[i] === 1) {
            i += 2;
        } else {
            i += 1;
        }
    }
    // If we stop at the second-last bit, the last bit is a one-bit character
    return i === bits.length - 1;
    
};