const add = function(a, b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(numbers) {

	return numbers.reduce((previousSum, newNumber)=> previousSum + newNumber, 0);
} ;



const multiply = function(numbers) {
if (numbers.length === 0){
  return 0
}

  return numbers.reduce((previous, newNumber)=> previous * newNumber, 1)
};

const power = function(a,b) {
	// return numbers.reduce((previous, newNumber) => previous ** newNumber)
  return a ** b;
};

const factorial = function (n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
