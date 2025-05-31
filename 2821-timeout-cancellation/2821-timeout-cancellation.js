/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    
    // set timeout function it will execute after t seconds of time
    const timeoutID = setTimeout(() => {
        fn(...args);
    },t);

    // fn to cancel the setTimeout fn
    return () => clearTimeout(timeoutID); 
    
};
