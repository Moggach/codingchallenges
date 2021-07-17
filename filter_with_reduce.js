//write a function that implements filter using reduce
//the function should take in an array and a callback function to be passed to the reduce method

function filter(arr, callback) {
  return arr.reduce((acc, current) => {
    if (callback(current)) {
      acc.push(current);
    }
    return acc;
  }, []);
}

filter([1, 2, 3], (num) => num > 5);
