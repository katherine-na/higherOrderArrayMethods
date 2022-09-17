<h1 align="center">Higher Order Array Methods in JavaScript</h1>

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
const newArray = givenArray.map((w) => `${w}s`);
console.log(newArray); // ['pens', 'books', 'codes']
```

### map() and forEach()

The big difference between the map and forEach method is that the map method creates a new array
the forEach method just iterates over the array.

Example

```js
const colors = ["Pink", "Yellow", "Blue", "Green"];

colors.forEach((color) => console.log(color));

/*
Pink 
Yellow
Blue
Green
*/
```

### Array.prototype.filter

filter() creates a new array by filtering all elements that meet the condition implemented by the given function that returns true or false.

Example

```js
const numbers = [1, 2, 3, 4, 5, 6, , 7, 8, 9];
const filterNumbers = numbers.filter((x) => x < 5);
console.log(filterNumbers); // [1, 2, 3, 4]
```

### Array.prototype.reduce

### Array.prototype.some and Array.prototype.every

##
