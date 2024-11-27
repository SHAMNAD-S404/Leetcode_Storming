function maxNumberOfBalloons(text: string): number {

  const letterCount : Record<string , number> = {} ; 

  //count the freeq of letter 
  for(const char of text){
    letterCount[char] = (letterCount[char] || 0)+1;
  }

  //count the freq for each word'
  const b:number = letterCount['b'] || 0;
  const a:number = letterCount['a'] || 0;
  const l:number = Math.floor( (letterCount['l'] || 0) / 2);
  const o:number = Math.floor( (letterCount['o'] || 0) / 2);
  const n:number = letterCount['n'] || 0;

  //returning min count 
  return Math.min(b,a,l,o,n) 

}