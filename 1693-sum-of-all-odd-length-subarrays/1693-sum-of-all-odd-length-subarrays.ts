function sumOddLengthSubarrays(arr: number[]): number {

    let n = arr.length;
    let totalSum = 0;

    for (let i = 0; i < n; i++) {
        let count = Math.floor(((i + 1) * (n - i) + 1) / 2);
        totalSum += arr[i] * count;
    }

    return totalSum;
};