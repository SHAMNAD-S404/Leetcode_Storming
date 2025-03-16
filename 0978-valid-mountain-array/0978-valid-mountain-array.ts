function validMountainArray(arr: number[]): boolean {

    const size = arr.length;

    if(arr.length < 3) return false ;

    for(let i=0; i<arr.length; i++){
        if(arr[i] === arr[i+1] ){
            return false
        }else if( arr[i]>arr[i+1] && arr[i+1] < arr[i+2] ){
            return false
        }else if(arr[size-2] < arr[size-1] ){
            return false;
        }else if(arr[0] > arr[1] ){
            return false;
        }
    }
    return true;

};