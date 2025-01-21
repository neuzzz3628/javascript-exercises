const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current,0)
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current,1)
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  const array = [];
  for (let i = 1; i <= a; i ++){
    array.push(i);
  }
	return array.reduce((total,current) => total * current,1)
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
