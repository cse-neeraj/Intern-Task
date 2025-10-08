//Task 1
//Write a function to reverse a string (without using .reverse()).
function revString(str){
    if(str===""){
        return str
    }else{
        return revString(str.substr(1)) + str.charAt(0)
      }
}
    let result = revString("madam");
    console.log(result);

// Task 2
//Write a function to check if a number is prime.

function isPrime(num){
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}
console.log(isPrime(1));   
console.log(isPrime(2)); 
console.log(isPrime(3));   

//Task 3
//Write a function to find the maximum number in an array.
// built in function
function findMax(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let max = arr[0];
    for (const num of arr) {
        if (num > max) {
            max = num;
        }
    }
      return max;
}
console.log(findMax([3, 7, 2, 9, 1, 5]));

// by built in function

 function findMaximum(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    return Math.max(...numbers);
}
console.log(findMaximum([4,8,18,2]))






 
       
 