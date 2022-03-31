const personMethods = {
  eat() {
    console.log('Person is sleeping');
  },
  sleep() {
    console.log('Person is sleeping');
  },
  play() {
    console.log('Person is playing');
  },
};
function Person(name, age) {
  let person = Object.create(personMethods);
  person.name = name;
  person.age = age;
  return person;
}
const fozlol = new Person('Fozlol', 22);
fozlol.play();
