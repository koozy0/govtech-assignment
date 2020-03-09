exports.up = function(knex) {
  return knex.schema.createTable('student', table => {
    // add an auto incrementing id
    table.increments();

    // add columns
    table
      .string('email')
      .notNullable()
      .unique();
    table
      .boolean('is_suspended')
      .notNullable()
      .defaultTo(false);

    // add created_at and updated_at columns
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('student');
};
