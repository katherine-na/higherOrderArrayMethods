<h1 align="center">Array Every</h1>

## What is every?

The every() method checks if an element of the array meets the condition implemented by the function

- It returns a Boolean value.

## What is every used for

## Syntax

```js
every((element, index, array) => {});
```

## Parameters

|         |                           |          |
| ------- | ------------------------- | -------- |
| element | Each element of the array | required |
| index   | The index of the element  | optional |
| array   | The array was called      | optional |

## Example 1

```js
const numbers = [2, 4, 6, 8];

const thereAreEvenNumbers = numbers.every((value) => value % 2 === 0);
console.log(thereAreEvenNumbers); // true
```

## Example 2
