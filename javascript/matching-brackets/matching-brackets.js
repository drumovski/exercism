// Original solution

export const isPaired = (str) => {
  str = str.replace(/[^[\]{}()]/g,''); //remove rubbish
  let stack = [];
  for (let c of str) {
    switch (c) {
      case "(":
        stack.push(c);
        break;
      case ")":
        if (stack.pop() != "(") return false;
        break;
      case "[":
        stack.push(c);
        break;
      case "]":
        if (stack.pop() != "[") return false;
        break;
      case "{":
        stack.push(c);
        break;
      case "}":
        if (stack.pop() != "{") return false;
        break;
    }
  }
  return stack.length === 0;
};



// // Similar, less readable but without the repitition

// export const isPaired = (str) => {
//   str = str.replace(/[^[\]{}()]/g,''); //remove rubbish
//   let stack = [];
//   const bracketMap = {'}':'{', ')':'(',']':'['}

//   for (let bracket of str) {
//     if (!bracketMap[bracket]) stack.push(bracket) // if bracket is an open bracket
//     else if (stack.pop() != bracketMap[bracket]) return false // if closed bracket matches open bracket
//   }
//   return stack.length === 0
// };



// //  using recursion (based on SiddharthChaudhary93's solution): 

// export const isPaired = (str) => {
// 	str = str.replace(/[^[\]{}()]/g,''); //remove rubbish

//   const removePairs = (str) => {
//     if (str === '') return true; 
//     let initialLength = str.length;
//     str = str.replace(/\[\]|{}|\(\)/g, '');
//     if (str.length === 0) return true; 
//     if (initialLength === str.length) return false;
//     return removePairs(str);
//   }

// 	return removePairs(str)
// };
