function removeKdigits(num: string, k: number): string {

     let stack = [];
    
    for (let digit of num) {
        
        // Remove digits from the stack if they are larger than the current digit
        // and we still need to remove digits (k > 0)
        while (stack.length > 0 && stack[stack.length - 1] > digit && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }
    
    // If we still need to remove digits, remove them from the end
    while (k > 0) {
        stack.pop();
        k--;
    }
    
    // Convert stack to a number and remove leading zeroes
    let result = stack.join("").replace(/^0+/, "");
    
    // If result is empty, return "0"
    return result === "" ? "0" : result;
    
};