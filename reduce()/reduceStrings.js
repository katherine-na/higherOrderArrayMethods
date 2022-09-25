const string = ["mi", "name", "is", "Kathy"];
const stringmessage = string.reduce((acc, item) => {
  return (acc = ` ${acc} ${item}`);
}, "Morning");

console.log(stringmessage);
