const Person = require("./1.personPrototype");

const removeById = (personId, done)=> {
  Person.findByIdAndRemove(
    { _id: personId },
     (err, data)=> {
      if (err) {
        return done(err);
      } else {
        return done(null, data);
      }
    }
  );
};
