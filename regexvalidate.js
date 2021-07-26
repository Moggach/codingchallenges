//Write a function that validates a user input. The input should contain only numbers between 0-10 and have no spaces.
//Otherwise it should return a warning message. The input can be a string or a number.

function validator(input) {
  let valid = new RegExp(/^[0-9]{0,}$/);
  let array = Array.from(input).map(Number);

  if (valid.test(array)) {
    return true;
  } else {
    alert('something has gone wrong!');
  }
}
