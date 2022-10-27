const Person = require("./1.personPrototype");

const findEditThenSave = (personId, done) => {
  Person.findById(personId, (err, data) => {
    this.favoriteFoods.push("hamburger").save();
    if (err) {
      return done(err);
    } else {
      done(null, data);
    }
  });
};
