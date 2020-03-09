exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("student")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("student").insert([
        { email: "student.john@gmail.com" },
        { email: "student.jack@gmail.com" },
        { email: "student.jill@gmail.com" },
        { email: "student.rick@gmail.com" },
        { email: "student.morty@gmail.com" },
        { email: "student.lorna@gmail.com" },
        { email: "student.paul@gmail.com" },
        { email: "student.will@gmail.com" },
        { email: "student.sam@gmail.com" },
        { email: "student.brad@gmail.com" }
      ]);
    });
};
