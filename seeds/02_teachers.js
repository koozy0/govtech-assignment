exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("teacher")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("teacher").insert([
        { email: "teacher.ron@gmail.com" },
        { email: "teacher.dan@gmail.com" },
        { email: "teacher.ben@gmail.com" }
      ]);
    });
};
