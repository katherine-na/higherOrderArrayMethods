const pets = [
  { name: "firulais", age: 10, race: "dog" },
  { name: "winnie", age: 11, race: "dog" },
  { name: "pulga", age: 8, race: "dog" },
  { name: "pelusa", age: 5, race: "cat" },
];

const dogs = pets.filter((dog) => dog.race === "dog");
console.log(dogs);
