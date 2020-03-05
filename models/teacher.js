"use strict";
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define(
    "Teacher",
    {
      email: DataTypes.STRING
    },
    {}
  );
  Teacher.associate = function(models) {
    Teacher.belongsToMany(models.Student, {
      through: "TeacherStudent",
      as: "student"
    });
  };
  return Teacher;
};
