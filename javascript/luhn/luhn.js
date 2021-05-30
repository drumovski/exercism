const odd = (number) => number % 2 !== 0;
const luhn = (number) => (number > 4 ? number * 2 - 9 : number * 2);
const divisibleBy10 = (number) => number % 10 === 0;

export const valid = (num) => {
  const sanitisedNum = num.replace(/\s/g, "");
  if (/\D/.test(sanitisedNum) | (sanitisedNum.length === 1)) return false;
  let total = [...sanitisedNum].reverse().reduce((sum, number, index) => {
    number = Number(number);
    if (odd(index)) number = luhn(number);
    return sum + number;
  }, 0);
  if (divisibleBy10(total)) return true;
  return false;
};
