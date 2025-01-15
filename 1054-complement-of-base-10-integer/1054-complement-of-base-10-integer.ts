function bitwiseComplement(n: number): number {

    // Handle edge case when n is 0
    if (n === 0) return 1;
    
    // Convert number to binary string
    const binary = n.toString(2);
    
    // Create complement by flipping each bit
    const complement = binary
        .split('')
        .map(bit => bit === '0' ? '1' : '0')
        .join('');
    
    // Convert complement back to decimal
    return parseInt(complement, 2);
    
};