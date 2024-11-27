function isBoomerang(points: number[][]): boolean {


    //destructuring for readability
    const [x1 , y1] = points[0];
    const [x2 , y2] = points[1];
    const [x3 , y3] = points[2];

    //if any of piont is same return false

    if( (x1 === x2 && y1 === y2) ||
        (x2 === x3 && y2 === y3) ||
        (x3 === x1 && y3 === y1)  ){

            return false ;
        }

    //checking for its in same line or not 

    if( (y2 - y1) * (x3 - x2) === (y3 - y2) * (x2-x1) ){
        return false;
    }

    return true;

    
};