const getNthElement = (index, array) => {
  return array[index];
};
// ABOVE NEEDS LOOKING AT*/

const arrayToCSVString = array => { 
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  const nonono = numbers.map(num => {
    return String(num);
  });
  return nonono;
};

const uppercaseWordsInArray = strings => {
  const upper = strings.map(element => {
    return element.toUpperCase();
  });
  return upper;
};

const reverseWordsInArray = strings => {
  
};

const onlyEven = numbers => {
  
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
