const familyNegrete = [
  { name: "Liz", age: 28 },
  { name: "Marilyn", age: 26 },
  { name: "Khaleb", age: 6 },
];

const thereIsAnyChild = familyNegrete.some((child) => child.age < 18);
console.log(thereIsAnyChild);
