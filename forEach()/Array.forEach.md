<h1 align="center">Array forEach</h1>

## What is forEach?

The forEach() method executes a function for each array element.

## What is forEach used for

## Syntax

```js
forEach((element, index, array) => {});
```

## Parameters

|         |                           |          |
| ------- | ------------------------- | -------- |
| element | Each element of the array | required |
| index   | The index of the element  | optional |
| array   | The array was called      | optional |

## Example 1

```js
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));
/*
"a"
"b"
"c"
*/
```

## Example 2

```js
const items = ["item1", "item2", "item3"];
const copyItems = [];
items.forEach((item) => {
  copyItems.push(item);
```
