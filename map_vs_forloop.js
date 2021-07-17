//Rewrite this map method using a for loop. Make sure you return a new array. Scroll down for my solution.

const newArray = originalArray.map(function (number) {
  if (number >= 10) {
    return number * 2;
  } else {
    return number;
  }
});

console.log(newArray);

/*solution
  const originalArray = [5, 23, 35, 42, 15];
  const newArray = [];
   
  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] >= 10){
    newArray[i] = originalArray[i] * 2;
  }
   else {newArray[i] = originalArray[i] }
  }
  
  console.log(newArray)
  console.log(originalArray)*/
