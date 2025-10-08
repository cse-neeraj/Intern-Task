// task 1
// function to check if the string is palindrome
function isPalindrome(str) {

  const cleaned = str.toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome("madam"));   
console.log(isPalindrome("hello"));   
console.log(isPalindrome("Racecar")); 

// task 2
// function that flattens a nested array
function flattenArray(arr) {
  return arr.flat(Infinity);
}
// testCase
console.log(flattenArray([1, [2, [3, 4]], 5]));

//task 3
// program that counts word frequency in a sentence.
function countWordFrequency(sentence) {
  if (!sentence?.trim()) return {};
  
  return sentence
    .toLowerCase()
    .split(/\s+/)
    .reduce((freq, word) => {
      freq[word] = (freq[word] || 0) + 1;
      return freq;
    }, {});
}
console.log(countWordFrequency("this is a test this"));
console.log(countWordFrequency("test this to test"));



  


