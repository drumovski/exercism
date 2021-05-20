
export const largestProduct = (str, span) => {
  if (span > str.length )throw new Error('Span must be smaller than string length');
  if (/[^0-9]/.test(str))throw new Error('Digits input must only contain digits');
  if (span < 0)throw new Error('Span must be greater than zero');
  if (span === 0) return 1;
  let largestNumber = 0;
    for (let i = 0; i <= str.length - span; i++) {
      let testNumber = [...str.slice(i, span + i)].reduce((sum,x)=>sum*x)
      if (testNumber > largestNumber) largestNumber = testNumber
    }
    return largestNumber;
};