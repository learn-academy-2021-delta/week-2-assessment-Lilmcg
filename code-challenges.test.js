// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// // Expected output: "15 is divisible by three"
var num2 = 0
// // Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

// Write a test that will fail
// Input is a number
// Output is statement stating whether this number is divisible by three or is not divisible by three

// Declare a function named isDivisible
  // Function should take in one number
  // Conditional if the number is evenly divisible by 3
    // Return a statement that the number is divisible by three
  // Otherwise return a statement that the number is not divisible by three

describe("isDivisible", () => {
  test('given a number check whether or not it is evenly divisible by three', () => {
    expect(isDivisible(num1)).toEqual("is divisible by three")
    expect(isDivisible(num2)).toEqual("is divisible by three")
    expect(isDivisible(num3)).toEqual("is not divisible by three")
  })
})

// Ran the test
// Test failed
// Error message: isDivisible is not defined

// b) Create the function that makes the test pass.

// Declare a function named isDivisible
  // Function should take in one number from the previously established variables
  // Conditional if the number is evenly divisible by 3
    // Return a statement that the number is divisible by three
  // Otherwise return a statement that the number is not divisible by three

const isDivisible = (num) => {
  if(num % 3 === 0) {
    return `${num} is divisible by three`
  } else {
      return `${num} is not divisible by three`
  }

// Ran the Test
// Test failed again
// Error message: Jest encountered an unexpected token. Arrow pointing out an issue on empty line 121 at bottom of editor where no test or code was written // Makes no sense!
// Run the test separately for each of 3 variables previously created: num1, num2, num3
// This is where I refactored...

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// Write a test that will fail
// Input is an array containing word strings
// Output is an array containing word strings with their first letter capitalized

// Declare a function named capitalArrays
  // Function should take in an array of word strings
    // Return the array with the first letter of all strings capitalized

describe("capitalArrays", () => {
  test('return the array with first letter of each string capitalized', () => {
    expect(capitalArrays(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalArrays(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

// Ran the test
// Test failed
// Error message: test suite failed to run // Jest encountered an unexpected token. Shows an arrow pointing out an issue on empty line 125 at bottom of editor where no test or code was written // Makes no sense again!

// b) Create the function that makes the test pass.

// Declare a function named capitalArrays
  // Function should take in an array of word strings
// Create a local variable eachNoun that maps through the array
  // Return each value by accessing it's first index and capitalize it using .toUppercase and concatenate the remainder of the word starting at the second index using .substring
  // Return the local variable eachNoun joined into a string using .join

const capitalArrays = (array) => {
  let eachNoun = array.map(value => {
    return value[0].toUppercase() + value.substring(1)
  })
  return eachNoun.join(" ")
}

// Ran the test
// Test failed.
// Error message: Test suite failed to run // Jest encountered an unexpected token. Shows an arrow pointing out an issue on empty line 126 at bottom of editor where no test or code was written // Makes no sense again!


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// // Expected output: 1
var vowelTester2 = "academy"
// // Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

// Write a test that will fail
// Input is a string
// Output is the index of the string's first vowel

// Declare a function named firstVowel
  // Function should take in a string
    // Return the array with the first letter of all strings capitalized

describe("firstVowel", () => {
  test('given a string return the index of the first vowel', () => {
    expect(firstVowel(vowelTester1)).toEqual([1])
    expect(firstVowel(vowelTester2)).toEqual([0])
    expect(firstVowel(vowelTester3)).toEqual([2])
  })
})

// Ran the test
// Test failed
// Error message: test suite failed to run // Jest encountered an unexpected token. Shows an arrow pointing out an issue on empty line 135 at bottom of editor where no test or code was written // Makes no sense again!

// b) Create the function that makes the test pass.

// Declare a function named firstVowel
  // Function should take in a string
// Create a local variable vowelList that contains all possible vowels in a string
// Loop through the string firstVowel starting at the first index
  // Create conditional if any value in the string firstVowel matches any of the vowels listed in vowelList, stop iterating
    // Return the index of the first vowel in the string

// I am stuck on getting the code to reference each vowel in the variable vowelList and compare the character to each vowel in firstVowel.
// I tried creating another variable to help me out but I couldn't figure that out!


const firstVowel = (string) => {
  let vowelList = 'aeiouAEIOU'
  let vowelCount = 0
    for(let i=0; i<firstVowel.length; i++){
      if(vowelList.indexOf(string[i])) !== -1){
        return firstVowel.indexOf[i].
} else {
        return ("")
}

// Ran the test
// Test failed.
// Error message: Test suite failed to run // Jest encountered an unexpected token. Shows an arrow pointing out an issue on empty line 162 at bottom of editor where no test or code was written // Makes no sense again!
