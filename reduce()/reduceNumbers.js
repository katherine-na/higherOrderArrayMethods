const numbers = [2, 4, 6, 8, 10];
const sumNumbers = numbers.reduce((acc, item) => {
  return (acc = `${acc} ${item}`);
}, 0);

console.log(sumNumbers);
