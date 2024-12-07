function pivotInteger(n: number): number {
    
 const totalSum = (n * (n + 1)) / 2;

    for (let x = 1; x <= n; x++) {
        const leftSum = (x * (x + 1)) / 2;
        const rightSum = totalSum - leftSum + x; // Includes 'x' as it's part of the right side
        if (leftSum === rightSum) {
            return x;
        }
    }

    return -1; // No pivot integer found
};