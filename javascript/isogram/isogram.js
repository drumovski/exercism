export const isIsogram = (sentence) => {
  const [...cleanedSentence] = sentence.toLowerCase().replace(/[^a-z]/g, '')
  return cleanedSentence.length === new Set(cleanedSentence).size
};
