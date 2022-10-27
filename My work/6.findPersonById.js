const Person = require("./1.personPrototype");

const findPersonById = (personId, done) => {
  Person.findById({ _id: personId }, (err, data) =>
    err ? done(err) : done(null, data)
  );
};
