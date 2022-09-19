<h1 align="center">Higher Order Array Methods in JavaScript</h1>

## TODO:

- [] change the subtitle "map and forEach"
- [] complete the map definition
- [] complete what is map used for
- [] Questions
  _ What is the difference between map and for loops
  _ What is a predicate function
  _ Which array methods return something
  _ What are pure functions?
  _ What is the difference between - higher order functions - first class functions - currying
  _ What does reduce method do? If time allows
- [] Prepare as medium article

## Introduction

Higher order functions are functions that operate on other functions  
It is a function that accepts a function as a parameter or returns a function as the output.

## Methods to Arrays

### Array.prototype.forEach

- forEach() function can accept the arguments: currentItem, index, array.
- On each and every element of the array, it loops the element.

Example:

```js
const arr = [1, 2, 3, 4];
arr.forEach(val => console.log(val));
/* console:
1
2
3
4
```

### Array.prototype.map

- map() function can accept any of the three arguments: item, index, array.
- On each and every element of the array return values and create a new array.

Example:

```js
const givenArray = ["pen", "book", "code"];
const newArray = givenArray.map((string) => `${string}s`);
console.log(newArray); // ['pens', 'books', 'codes']
```

### map() and forEach()

The big difference between the map and forEach method is that the map method creates a new array
the forEach method just iterates over the element of the array.

### Array prototype filter

filter() creates a new array filtering all elements that meet the condition implemented by the given function that returns true or false.

Example

```js
const numbers = [1, 2, 3, 4, 5, 6, , 7, 8, 9];
const filterNumbers = numbers.filter((value) => value < 5);
console.log(filterNumbers); // [1, 2, 3, 4]
```

### Array prototype some

- The some() method checks if an element of the array meets the condition implemented by the function

```js
const numbers = [1, 2, 3, -5, -10, 4, 5];

const lessThanZero = numbers.some((number) => number < 0);

console.log(lessThanZero); // true
```

### Array prototype every

- The every() method checks if an element of the array meets the condition implemented by the function
- It returns a Boolean value.

```js
const numbers = [2, 4, 6, 8];

const thereAreEvenNumbers = numbers.every((value) => value % 2 === 0);
console.log(thereAreEvenNumbers); // true
```
