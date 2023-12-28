const palindromes = function (words) {
    wordsClean = words.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    let reverse = wordsClean.split('').reverse().join('');
   return wordsClean === reverse
    }

;



//brainstorm and pseudocode
/*
 First need to  join the whole string 

 


*/


// Do not edit below this line
module.exports = palindromes;
