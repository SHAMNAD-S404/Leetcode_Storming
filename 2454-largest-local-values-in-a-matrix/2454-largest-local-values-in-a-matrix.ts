function largestLocal(grid: number[][]): number[][] {

     const n = grid.length; // Size of the grid
    const maxLocal: number[][] = Array.from({ length: n - 2 }, () => Array(n - 2).fill(0));

    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n - 2; j++) {
            // Find the max in the 3x3 submatrix starting at (i, j)
            let maxVal = -Infinity;
            for (let row = i; row < i + 3; row++) {
                for (let col = j; col < j + 3; col++) {
                    maxVal = Math.max(maxVal, grid[row][col]);
                }
            }
            maxLocal[i][j] = maxVal; // Set the max value in the result matrix
        }
    }

    return maxLocal;
    
};