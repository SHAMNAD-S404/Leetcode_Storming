function closestPrimes(left: number, right: number): number[] {

    const isPrime = ( num : number) : boolean => {

        if(num <= 1) return false
        if(num === 2) return true;
        if(num % 2 === 0) return false;

        for(let i = 3 ; i<= Math.sqrt(num); i+=2){
            if(num % i === 0) return false;
        };

        return true;
    }

    const primeNumbers = (start:number , end : number) : number[] => {
        
        const result : number[] = [];
        for(let i=start ; i<= end ; i++){
            if( isPrime(i) ){
                result.push(i)
            }
        }

        if(result.length < 2){
            return [-1,-1];

        }else{
            let difference : number = Infinity;
            let num1 : number = -1;
            let num2 : number = -1;

            for(let i=0; i<result.length-1; i++){
                const diff = result[i+1] - result[i];
                if(diff < difference){
                    difference = diff;
                    num1 = result[i];
                    num2 = result[i+1];
                }
            }
            return [num1,num2];
        }
    }

    return primeNumbers(left,right);
    
};