function shuffle(nums: number[], n: number): number[] {

    const answer : number [] = []
    let start = 0;
    let end = n;
    while (start < n){
        answer.push(nums[start])
        answer.push(nums[end])
        start++;
        end++;
    }

    return answer;

};