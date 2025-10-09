// functon to count the nuber of vowels in a string
function countVowels(str){
    return (str.match(/[aeiou]/gi) || []  ).length; // using regex 
}
console.log(countVowels(" Neeraj"));
console.log(countVowels("r"));
console.log(countVowels(""));

// functon to check if a string is palindrome

function isPalindrome(str){
    const cleaned = str.toLowerCase();
    const reversed = cleaned.split("").reverse().join("") || [];
    return cleaned === reversed;
                                 
}

console.log(isPalindrome("madam"));
console.log(isPalindrome(""));

// function to find the factorial of a number.
function factorial(n) {
    // Handle negative numbers
    if (n<0) {
        return "Factorial is not defined for negative numbers";
    }
    
    let result = 1;
    for (let i = 1; i<=n; i++) {
        result = result * i;
    }
    
    return result;
}
console.log(factorial(-2));
console.log(factorial(4));

// recursive method

function factorial(n) {
    if (n < 0) {
        return " factorial only work for negative numbers"
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

   console.log(factorial(5))








