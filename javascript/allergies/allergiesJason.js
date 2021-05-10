const ALLERGIES = [
  "eggs",
  "peanuts",
  "shellfish",
  "strawberries",
  "tomatoes",
  "chocolate",
  "pollen",
  "cats",
];

const limitNumber = (num, limit) => {
  // desregard alergies greater than limit
  let noAllergen = limit;
  // find largest noallergen number greater than num
  for (noAllergen; num > noAllergen; noAllergen *= 2) {
    // loops through incrementing noAllergen * 2 to use later
  }
  // minus all noAllergen numbers from num starting at the largest
  for (noAllergen; num >= limit; noAllergen /= 2) {
    if (noAllergen <= num) num -= noAllergen;
  }
  return num;
};

const listAllergies = (num, limit) => {
  let listOfAllergies = [];
  let alergyValue = limit / 2;
  for (let i = ALLERGIES.length - 1; i >= 0; i--) {
    if (num >= alergyValue) {
      num -= alergyValue;
      listOfAllergies.push(ALLERGIES[i]);
    }
    alergyValue /= 2;
  }
  return listOfAllergies;
};

export class Allergies {
  constructor(num) {
    this.limit = 256; // double this number for each additional allergy
    this.num = limitNumber(num, this.limit);
  }

  list() {
    const listOfAllergies = listAllergies(this.num, this.limit).reverse();
    return listOfAllergies;
  }

  allergicTo(allergen) {
    const listOfAllergies = listAllergies(this.num, this.limit);
    return listOfAllergies.includes(allergen);
  }
}
