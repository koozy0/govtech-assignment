exports.up = function(knex) {
  return knex.schema.createTable("student_teacher", table => {
    // foreign key referencing 'student' table
    table
      .integer("student_id")
      .unsigned()
      .notNullable();

    table
      .foreign("student_id")
      .references("student.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    // foreign key referencing 'teacher' table
    table
      .integer("teacher_id")
      .unsigned()
      .notNullable();

    table
      .foreign("teacher_id")
      .references("teacher.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    // introduce a unique index to 'student_id' + 'teacher_id'
    table.unique(["student_id", "teacher_id"]);

    // add created_at and updated_at columns
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("student_teacher");
};
