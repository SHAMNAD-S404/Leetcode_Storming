function isCovered(ranges: number[][], left: number, right: number): boolean {

    for (let x = left; x<= right; x++) {
        let isCovered = false;

        for(const [start,end] of ranges) {
            if(start <= x && x <= end){
                isCovered = true
            }
        }

        if(!isCovered) return false;
    }

    return true;
    
};