<h1 align="center">Array Filter</h1>

## What is filter?

filter() creates a new array filtering all elements that meet the condition by the given function that returns true or false.

## What is filter used for

## Syntax

```js
filter((element, index, array) => {});
```

## Parameters

|         |                           |          |
| ------- | ------------------------- | -------- |
| element | Each element of the array | required |
| index   | The index of the element  | optional |
| array   | The array was called      | optional |

## Example 1

```js
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result); //["exuberant", "destruction", "present"]
```

## Example 2

```js
const numbers = [1, 2, 3, 4, 5, 6, , 7, 8, 9];
const filterNumbers = numbers.filter((value) => value < 5);
console.log(filterNumbers);
```
