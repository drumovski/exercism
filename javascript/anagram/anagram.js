export const findAnagrams = (word, arr) => {
  word = word.toLowerCase()
  
  function isAnagram(anagram) {
    if (word.length !== anagram.length) return false
    anagram = anagram.toLowerCase()
    if (word === anagram) return false
    for (let letter of word) {
      anagram = anagram.replace(letter,"")
    }
    return !anagram //returns true if anagram is empty string
  } 

  return arr.filter(isAnagram);
};