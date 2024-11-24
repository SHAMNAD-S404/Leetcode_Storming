//? Question :- 2496. Maximum Value of a String in an Array

//* Approach 
// Approach
// Iterate through each string in the array strs.

// For each string:

// Check if it is numeric using isNaN.
// If it is numeric, convert it to a number; otherwise, use its length as the value.
// Track the maximum value during the iteration.

// Return the maximum value after processing all strings.

// Steps:
// Define a helper function getSize to compute the value of a string based on its type (numeric or alphanumeric).
// Use a loop to evaluate each string using getSize and update the maximum value found so far.
// Return the final maximum value.
// Complexity
// Time complexity:O (n)
// Space complexity:O (1)

//********************************************************************************************************************** */
//********************************************************************************************************************** */


//* SOLUTION

function maximumValue(strs: string[]): number {



    let max = 0;

    //function for finding the length or value of element
    function getSize(element) {

        //checking value number or not
        if( isNaN(element) ){
            return element.length;
        }else{           
           return Number(element);        
        }

    }

    //finding the max value 
    for(const ele of strs){

        const length = getSize(ele)
        if(length > max) max = length;
    }

    return max ;
    
};

//********************************************************************************************************************** */