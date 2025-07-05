function getCommon(nums1: number[], nums2: number[]): number {
    
  let i : number = 0 , j: number = 0;

  while( i < nums1.length && j < nums2.length ){

    if(nums1[i] < nums2[j] ){
      i++;
    }else if(nums1[i] > nums2[j] ) {
      j++;
    }else{
        return nums1[i]
    }
  }
  return -1
};