function findJudge(n: number, trust: number[][]): number {
      const trustCount: number[] = new Array(n + 1).fill(0);
 
    for (const [a, b] of trust) {
        trustCount[a] -= 1;  
        trustCount[b] += 1; 
    }
    
    // Check for the judge
    // Judge should have n-1 incoming edges (trusted by everyone else)
    // So trustCount[judge] should be n-1
    for (let i = 1; i <= n; i++) {
        if (trustCount[i] === n - 1) {
            return i;
        }
    }
    
    return -1;
    
};