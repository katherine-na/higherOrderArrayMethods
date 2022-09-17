<h1 align="center">Array Map </h1>

## What is map?

The map() method takes the elements of an array and creates a function. Map creates a new array with the results of a function

## What is Map used for

## Syntax

```js
map((element, index, array) => {});
```

## Parameters

|         |                           |          |
| ------- | ------------------------- | -------- |
| element | Each element of the array | required |
| index   | The index of the element  | optional |
| array   | The array was called      | optional |

## Example 1

```js
const singularAnimal = ["Cat", "Dog", "Hamster"];
const pluralAnimals = singularAnimal.map((string) => `${string}s`);
console.log(pluralAnimals); // [ "Cats", "Dogs", "Hamsters" ]
```

## Example 2

```js
const numbers = [2, 4, 6, 8];
const multiplicateNumbers = numbers.map((value) => value * 2);
console.log(multiplicateNumbers);
```
