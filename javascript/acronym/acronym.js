export const parse = (phrase) => {
  let acronym = phrase.split(/\s|-|_/).reduce((letters,word)=> letters+=word.slice(0,1),'')
  return acronym.toUpperCase()
};
