/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {

    let five = 0;
    let ten  = 0;
    for (const bill of bills){

        if(bill === 5  ) five++;
        if(bill === 10 ) ten++;

        if(bill === 10){
            if( five <= 0 ) return false;
            five--;

        }else if ( bill === 20 ){

            if( five <= 0 || ten <= 0 && five < 3 ) return false;          
            if(five > 0 && ten > 0){
                five--;
                ten--;
            }else{
                five-= 3;
            }
        }
    }
    return true;
    
};