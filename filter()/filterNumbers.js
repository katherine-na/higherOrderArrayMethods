const numbers = [1, 2, 3, 4, 5, 6, , 7, 8, 9];

const filterNumbers = numbers.filter((value) => value < 5);
console.log(filterNumbers);

const error = numbers.filter((value) => value + 2);
console.log(error);
