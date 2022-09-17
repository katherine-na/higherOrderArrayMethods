const numbers = [1, 2, 3, -5, -10, 4, 5];

const lessThanCero = numbers.some((number) => {
  return number < 0;
});

console.log(lessThanCero);
