// const firstString = 'Hello';
// const lastString = 'JavaScript';

// console.log(firstString + lastString);

// let x;

// x = 7;
// x = 'JS is great';

// console.log(x);

function calculate(value) {
  return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));
