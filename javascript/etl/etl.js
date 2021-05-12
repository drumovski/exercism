export const transform = (oldObject) => {
  let answer = {};
  for (const value in oldObject) {
    oldObject[value].map((letter) => {
      answer[letter.toLowerCase()] = parseInt(value);
    });
  }
  return answer;
};
