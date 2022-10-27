const Person = require("./1.personPrototype");

let person1 = new Person({
  name: "Ahmed",
  age: 21,
  favoriteFoods: ["cookies", "fish soup"],
});

const createAndSavePerson = (done) => {
  person1.save(function (err, data) {
    if (err) {
      return done(err);
    }
    return done(null, data);
  });
};
