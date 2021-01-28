// Smallest String With A Given Numeric Value

// The numeric value of a lowercase character is defined as its position (1-indexed) in the alphabet, so the numeric value of a is 1, the numeric value of b is 2, the numeric value of c is 3, and so on.

// The numeric value of a string consisting of lowercase characters is defined as the sum of its characters' numeric values. For example, the numeric value of the string "abe" is equal to 1 + 2 + 5 = 8.

// You are given two integers n and k. Return the lexicographically smallest string with length equal to n and numeric value equal to k.

// Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order, that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.

// Input: n = 3, k = 27
// Output: "aay"
// Explanation: The numeric value of the string is 1 + 1 + 25 = 27, and it is the smallest string with such a value and length equal to 3.


function smallestStringFinder(n : number, k : number) : string {
  // create and empty string
  let smallestString : string = '';
  // create a alphaNumericMap
  const alphaNumericMap = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
    9: 'i',
    10: 'j',
    11: 'k',
    12: 'l',
    13: 'm',
    14: 'n',
    15: 'o',
    16: 'p',
    17: 'q',
    18: 'r',
    19: 's',
    20: 't',
    21: 'u',
    22: 'v',
    23: 'w',
    24: 'x',
    25: 'y',
    26: 'z'
  }
  // create a currentNumericVal = k
  let currentNumericValue : number = k;

  // while string length is less than n
  while (smallestString.length < n) {
    // currentCharTarget = currentNumericVal - (n - string.length) + 1
    const currentCharTarget : number = currentNumericValue - (n - smallestString.length) + 1;
    // if currentCharTarget >= 26
    if (currentCharTarget >= 26) {
      // concat z with string
      smallestString = 'z' + smallestString;
      // subtract 26 from currentNumericVal
      currentNumericValue -= 26;
      // else
    } else {
      // currentChar = alphaNumericMap[currentCharTarget];
      const currentChar : string = alphaNumericMap[currentCharTarget];
      // subtract currentCharTarget from currentNumericVal
      currentNumericValue -= currentCharTarget;
      // concat currentChar with string
      smallestString = currentChar + smallestString;
    }
  }
  // return string
  return smallestString;
}

// console.log(smallestStringFinder(1, 24)) // => 'x'
// console.log(smallestStringFinder(4, 30)) // => 'aabz'






// to run: npx ts-node singleNumber.ts