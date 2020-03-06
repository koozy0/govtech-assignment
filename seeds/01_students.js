exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("student")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("student").insert([
        { email: "student.john@gmail.com" },
        { email: "student.jack@gmail.com" },
        { email: "student.jill@gmail.com" }
      ]);
    });
};
