const Person = require("./1.personPrototype");

const arrayOfPeople = [
  { name: Bilal, age: 14, favoriteFood: ["chicken burger", "apple"] },
  { name: Ahlem, age: 29, favoriteFood: ["chocolate", "vegetable soupe"] },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) {
      return done(err);
    }
    return done(null, data);
  });
};
