exports.up = function(knex) {
  return knex.schema.createTable("teacher", table => {
    // add an auto incrementing id
    table.increments();

    // add columns
    table
      .string("email")
      .notNullable()
      .unique();

    // add created_at and updated_at columns
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("teacher");
};
