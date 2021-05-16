export const compute = (strand1, strand2) => {
  let hamming = 0;
  const length_left = strand1.length;
  const length_right = strand2.length;
  
  if (length_left === 0 && length_right === 0) {
    return hamming;
  }
  if (length_left === 0) {
    throw new Error("left strand must not be empty");
  }
  if (length_right === 0) {
    throw new Error("right strand must not be empty");
  }
  if (length_left - length_right !== 0) {
    throw new Error("left and right strands must be of equal length");
  }

  for (let i = 0; i < length_left; i++) {
    if (strand1[i] !== strand2[i]) {
      hamming++;
    }
  }
  return hamming;
};
