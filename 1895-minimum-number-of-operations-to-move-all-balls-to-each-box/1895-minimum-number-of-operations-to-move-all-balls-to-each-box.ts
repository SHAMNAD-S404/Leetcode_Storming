function minOperations(boxes: string): number[] {
    

    const n = boxes.length;
    const result: number[] = new Array(n).fill(0);

    // Step 1: Count the number of balls to the left of each box and calculate the operations
    let balls = 0; // Number of balls 
    let operations = 0; 

    for (let i = 0; i < n; i++) {
        result[i] += operations; // Add the operations required to move balls to this box
        balls += parseInt(boxes[i]); // If the current box has a ball, increment the ball count
        operations += balls; // Each ball adds 1 operation for the next box
    }

    // Step 2: Count the number of balls to the right of each box and calculate the operations
    balls = 0; // Reset ball count
    operations = 0; // Reset operations

    for (let i = n - 1; i >= 0; i--) {
        result[i] += operations; 
        balls += parseInt(boxes[i]); 
        operations += balls;
    }

    return result;
};