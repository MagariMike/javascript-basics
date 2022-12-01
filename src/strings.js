const { getSupportInfo } = require("prettier");

function sayHello (string) {
return "Hello, " + string + '!';
return 'Hello' + string + '!';
return 'Hello' + string;
 };

function uppercase (string) {
  return string.toUpperCase();
};

function lowercase (string) {
return string.toLowerCase();
};

function countCharacters (string) {
return string.length;
};

function firstCharacter (string) {
return string.charAt(0);
};

function firstCharacters (string, n) {
return string.charAt(0,1,2,3);
return string.chatAt(0-1);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
