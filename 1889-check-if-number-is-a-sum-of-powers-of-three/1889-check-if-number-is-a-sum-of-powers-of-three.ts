function checkPowersOfThree(n: number): boolean {


//  1.Loop will continue untill n reach zero
    while(n > 0 ){

//  2. here we checking if reminder of n%3 is 2 , if its, then its false because 2 is not a power of 3. powers are (1,3,9,27 ...)

        if(n%3 === 2){
            return false;
        }
//  3. here we reducing n by 3 to check  its reminder will come 0  or not       

        n = Math.floor(n/3)

    }
    return true;
    
};