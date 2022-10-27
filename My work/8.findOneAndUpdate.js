const Person = require("./1.personPrototype");

const findAndUpdate = (personName, done) => {
  const person = Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true },
    (err, data) => {
      if (err) {
        return done(err);
      } else {
        return done(null, data);
      }
    }
  );
};
