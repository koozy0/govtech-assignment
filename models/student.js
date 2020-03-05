"use strict";
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      email: DataTypes.STRING,
      suspended: DataTypes.BOOLEAN
    },
    {}
  );
  Student.associate = function(models) {
    Student.belongsToMany(models.Teacher, {
      through: "TeacherStudent",
      as: "teacher"
    });
  };
  return Student;
};
