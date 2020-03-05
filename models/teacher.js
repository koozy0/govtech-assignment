"use strict";
const { v4: uuid } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define(
    "Teacher",
    {
      email: DataTypes.STRING
    },
    {}
  );

  Teacher.beforeCreate(teacher => (teacher.id = uuid()));

  Teacher.associate = function(models) {
    Teacher.belongsToMany(models.Student, {
      through: "StudentTeacher",
      as: "teachers",
      foreignKey: "teacherId",
      otherKey: "studentId"
    });
  };

  return Teacher;
};
