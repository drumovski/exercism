export const hey = (message) => {
  message = message.trim();

  const question = message.endsWith("?"),
    upperCase = /[A-Z]/,
    lowerCase = /[a-z]/,
    shout = /^[^a-z]*[A-Z][^a-z]*$/,
    word = /[\w]/;

  // if (question && upperCase.test(message) && !lowerCase.test(message))
  if (question && shout.test(message))
    return "Calm down, I know what I'm doing!";
  if (question) return "Sure.";
  if (!word.test(message)) return "Fine. Be that way!";
  if (upperCase.test(message) && !lowerCase.test(message))
    return "Whoa, chill out!";
  return "Whatever.";
};
