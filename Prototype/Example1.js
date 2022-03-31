function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;
  return person;
}
Person.prototype = {
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
const fozlol = new Person('Fozlol', 22);
fozlol.play();
