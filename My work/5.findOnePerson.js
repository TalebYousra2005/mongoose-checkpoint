const Person = require("./1.personPrototype");

const findOnePerson = (food, done) => {
  Person.find({ "favoriteFood": [food] }, (err, data) => {
    if (err) return done(err);
    return done(null, data);
  });
};
