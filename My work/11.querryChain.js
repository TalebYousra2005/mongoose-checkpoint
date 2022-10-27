const Person = require("./1.personPrototype")

var queryChain = function(done) {
    var foodToSearch = "chocolate";
    Person.find({favoriteFoods: foodToSearch})
    .sort({name: 1})
    .limit(2)
    .select({age: 0})
    .exec(function(err, data){
      if (err) {
        done(err)
      }
      else {
        done(null, data)
      }
    })
  }