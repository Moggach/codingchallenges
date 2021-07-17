
//write a function that uses binary search to find the index of a given value in an array

const doSearch = function(array, targetValue) {
    let min = 0;
    let max = array.length - 1;
    let guess;
    let guesscount = 0;
  
    while( min <= max ){
        guess = Math.floor((min + max) / 2);
        guesscount = guesscount + 1;
        

        if( array[guess] === targetValue ){
            return guess;
        } else if( array[guess] < targetValue ){
            min = guess + 1;
        } else{
            max = guess - 1;
        }
    }
    return -1;
};

const primes = [2, 3, 5, 7, 11, 13];

(doSearch(primes, 11) //expected 4