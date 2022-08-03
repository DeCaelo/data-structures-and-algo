// 004 is prime
// Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

// A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

// For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

// You can assume that the input number is a positive integer.

const isPrime = (n) => {
  // guard exclude 1
  if (n < 2) {
    return false;
  }
  // need to start to 2
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

//test_00:
console.log(isPrime(2)); // -> true
//test_01:
console.log(isPrime(3)); // -> true
//test_02:
console.log(isPrime(4)); // -> false
//test_03:
console.log(isPrime(5)); // -> true
//test_04:
console.log(isPrime(6)); // -> false
//test_05:
console.log(isPrime(7)); // -> true
//test_06:
console.log(isPrime(8)); // -> false
//test_07:
console.log(isPrime(25)); // -> false
//test_08:
console.log(isPrime(31)); // -> true
//test_09:
console.log(isPrime(2017)); // -> true
//test_10:
console.log(isPrime(2048)); // -> false
//test_11:
console.log(isPrime(1)); // -> false
//test_12:
console.log(isPrime(713)); // -> false

// Complexity
// n = input number
// Time: O(n) constant or O(sqrt(n))
// Space: O(1) linear
