const user = [
  { name: "Kathy", age: 21 },
  { name: "Marilyn", age: 26 },
];

const reduceAge = user.reduce((acc, item) => {
  return (acc = acc += item.age);
}, 0);

console.log(reduceAge);
