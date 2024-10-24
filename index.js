// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}
/*
for (const str of stringArray) {
  numbers.push(+str); 
}
*/


// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
const getLength = (numbers) =>{
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
// I will use a for...of loop bc thats how to iterate through arrays.
// n of numbers - the n is the variable for each index in the array
//so  
const getSum = (numbers)=>{
  let sum = 0;
  for (const n of numbers){
    sum =+ n;
    return sum;
  }
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers*/
 // I have to create a function that will add up all the numbers and divide them by how many numbers there are to get the mean
 // I already have a function that will add them all up (getsum)
 // so I have to use getSum in the the getMean
const getMean = (numbers)=>{
const sum = getSum(numbers)
return sum / numbers.length
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
// I have to create a function that will return the smallest number (getMin)
// I have create a variable (min) that will be greater than all numbers (infinity)
// I will use a for of loop to iterate through all the numbers in the array (n)
// I need to use an if statment saying that if (n) is less than (min) to return it
// this will return the lowest number
const getMin = (numbers) =>{
  let min = Infinity;
  for (const n of numbers) {
    if (n > min) {
      min = n
    }
  }
  return min;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers */

const getMax = (numbers) =>{
  let max = -Infinity;
  for (const n of numbers){
    if (n > max) {
      max = n
    }
  }
  return max;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
const getRange = (numbers) =>{
  return getMax(numbers) - getMin(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array*/
// I have to create a function that that will get the even numbers in the array
// I have to create a new array (output) to PUSH those even numbers into
// use a for...of loop to iterate through the indexes of the array
// I will use and if statement with modulus (%) to determain what numbers are even - if there is no remainder after divding n by 2, it is an even number
// n % 2 must STRICTLY EQUAL 0 aka, have no remainder
// then I will PUSH those even numbers into the new array and return the new array
const getEvens = (numbers)=>{
  const output = [];
  for (n of numbers) {
    if (n % 2 === 0)
      output.push(n);
  }
return output;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
const getOdds = (numbers) => {
  const output = [];
  for (const n of numbers) {
    if (n % 2 === 1) {
      output.push(n);
    }
  }
  return output;
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);