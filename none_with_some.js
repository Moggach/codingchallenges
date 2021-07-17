//write a function that takes in an array and a callback function
//the function should return true if the result of the callback function is not in the array
//the function should use the array method .some()

function none(arr, callback) {
  if (!arr.some(callback)) {
    return true;
  }
  return false;
}

console.log(none([1, 2, 4], (n) => n === 3));
