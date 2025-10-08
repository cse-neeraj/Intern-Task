//Reverse a string (e.g., "hello" → "olleh").
// Step 1: Define the original string
let originalString = "hello";
// Step 2: Create an empty string to store the reversed result
let reversedString = "";
// Step 3: Start a for loop that goes from the last character to the first
for (let i = originalString.length - 1; i >= 0; i--) {
    // Step 4: Get the character at position i and add it to reversedString
    reversedString = reversedString + originalString[i];
}
// Step 5: Output the result
console.log(reversedString); // prints "olleh"

//Best case 
const reverseString = str => str.split('').reverse().join('');

console.log(reverseString("hello")); // "olleh"

//Task 2 
// Find the maximum number in an array (e.g., [2, 8, 5, 1] → 8).

function findMaximum(numbers) {
    // Check if array is empty
    if (numbers.length === 0) {
        return undefined;
    }
    
    // Use built-in Math.max function
    return Math.max(...numbers);
}

// Test cases
console.log(findMaximum([2, 8, 5, 1])); // Output: 8
console.log(findMaximum([]));           // Output: null




//Task 3
//Count vowels in a string (e.g., "internship" → 3).
function countVowels(str) {
    const vowels = str.match(/[aeiou]/g);
    return vowels ? vowels.length : 0;
}
console.log(countVowels("internship"));
console.log(countVowels("Neeraj"));




    
// Task 4
// Takes an array of numbers and returns only the even numbers.
function getEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

// Test case
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));



  //Task 5
  // Write a function that takes a sentence and capitalizes the first letter of each word.

    function capitalizeWords(sentence){
     return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Example usage
console.log(capitalizeWords("hello world"));        // "Hello World"


//Part 2 

// Task 1
//regex pattern for valid mail

function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

console.log(isValidEmail("hello@example.com")); // true


// regex pattern for 10 digit Indian mobile number

function isValidIndianMobile(number) {
    const regex = /^(\+91|91)?[6-9]\d{9}$/;
    return regex.test(number);
}

// Test cases
console.log(isValidIndianMobile("9876543210")); // true


// regex expression for strings that contains only alphabets no numbers
function isOnlyLetters(str) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(str);
}

// Test cases
console.log(isOnlyLetters("Hello"));      // true


// Task 2 
// code snippet


const str = "Email me at intern@test.com or call 9876543210.";

// Extract email
const emailMatch = str.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
const email = emailMatch ? emailMatch[0] : null;

// Extract 10-digit Indian mobile number (starts with 6-9)
const phoneMatch = str.match(/[6-9]\d{9}/);
const phone = phoneMatch ? phoneMatch[0] : null;

console.log("Email:", email);   // Email: intern@test.com
console.log("Phone:", phone);   // Phone: 9876543210
    