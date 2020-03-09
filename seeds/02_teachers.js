exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teacher')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('teacher').insert([
        { email: 'teacher.ron@gmail.com' },
        { email: 'teacher.dan@gmail.com' },
        { email: 'teacher.ben@gmail.com' },
        { email: 'teacher.jon@gmail.com' },
        { email: 'teacher.tim@gmail.com' },
        { email: 'teacher.larry@gmail.com' },
        { email: 'teacher.jan@gmail.com' },
        { email: 'teacher.jim@gmail.com' },
        { email: 'teacher.tori@gmail.com' },
        { email: 'teacher.han@gmail.com' },
      ]);
    });
};
