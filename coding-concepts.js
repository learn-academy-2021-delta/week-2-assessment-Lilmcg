// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.split(""))

// a) Your answer:
// ["D", "e", "l", "t", "a", " ", "2", "0", "2", "1"]

// b) Verify and explain:
// My answer was correct. Using two quotation marks in a split method, without a space in between, will convert the string values into an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello LEARN Student

// b) Verify and explain:
// My answer was wrong. There was no return indicated in the code so the result is undefined

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer:
// [8, 10, 12, 14, 16]

// b) Verify and explain:
// My answer was correct. .map function iterates through the array and returns a new array of the same length and multiplies each value by two

// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer:
// [12, 14]
// b) Verify and explain:
// My answer was correct. .filter loops through an array and returns a new array with only the values that are even

// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:
// student: "George", cohert: "Delta", year: "2021"

// b) Verify and explain:
// The actual outcome:
// { student: 'George', cohert: 'Delta', year: '2021'} The console log returns each key's label and it's associated value. Delta and 2021 are hard coded and do not change. George is the argument for the variable 'name' in the 'student' key. New creates the object that is an instance of a name in the class Learn
