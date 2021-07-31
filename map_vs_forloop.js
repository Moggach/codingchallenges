//Rewrite this for loop with a map method

const originalArray = [5, 23, 35, 42, 15];
const newArray = [];

for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] >= 10) {
    newArray[i] = originalArray[i] * 2;
  } else {
    newArray[i] = originalArray[i];
  }
}

/*const newArray = originalArray.map(function (number) {
  if (number >= 10) {
    return number * 2;
  } else {
    return number;
  }
})*/
