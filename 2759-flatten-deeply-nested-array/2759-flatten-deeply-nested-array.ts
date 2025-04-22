type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    const result = [];

  function flattenHelper(subArr, currentDepth) {
    for (const element of subArr) {
      if (Array.isArray(element) && currentDepth < n) {
        flattenHelper(element, currentDepth + 1);
      } else {
        result.push(element);
      }
    }
  }

  flattenHelper(arr, 0);
  return result;
};