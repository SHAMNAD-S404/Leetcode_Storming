type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    
    //to store key and result
    const cache = new Map<String,any>();
    let callCount:number = 0; // to record call count

    //to generate key 
    const generateKey = (...args:any[]) : string => JSON.stringify(args);

    //fn for return
    const memoisedFn = (...args:any[]) => {
        
        const key = generateKey(...args);
        //1. if cache have result , then return it
        if(cache.has(key)){
            return cache.get(key)
        }

        //2. if cache have no value then get result and store it
        const result = fn(...args);
        cache.set(key,result)
        callCount++;

        return result;
    }
    //attach a method to existing fn
    memoisedFn.getCallCount = ()=> callCount;
    return memoisedFn
}
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */