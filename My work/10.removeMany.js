const Person = require("./1.personPrototype");

const removeManyPeople = (done) =>{
  var nameToRemove = "Mary";
    Person.remove({ name: nameToRemove },  (err, data) =>{
    if (err) {
      return done(err);
    } else {
      return done(null, data);
    }
  });
};
