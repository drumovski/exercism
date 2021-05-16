export const square = (n) => {
  if (n < 1 || n > 64) throw new Error("square must be between 1 and 64");
  return BigInt(1 * 2 ** (n - 1));
};

export const total = () => {
  let allGrains = BigInt(0);
  for (let i = 1; i < 65; i++) {
    allGrains += square(i);
  }
  return allGrains;
};
