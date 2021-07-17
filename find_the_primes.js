//write a function that returns only the prime numbers from an array.
//If the array is [] return the empty array.

const findThePrimes = function (array, callback) {
  let result = [];
  array.filter(function (element, array) {
    if (callback(element) == true) {
      result.push(element);
    }
  });
  return result;
};

//callback function
const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//console.log(findThePrimes(array, isPrime));
