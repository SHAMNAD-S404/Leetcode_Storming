function lastStoneWeight(stones: number[]): number {

     while (stones.length > 1) {
        stones.sort((a, b) => b - a); // Sort in descending order
        const stone1 = stones.shift()!; // Remove heaviest
        const stone2 = stones.shift()!; // Remove second heaviest
        if (stone1 !== stone2) {
            stones.push(stone1 - stone2); 
        }
    }
    return stones.length === 0 ? 0 : stones[0];
    
};