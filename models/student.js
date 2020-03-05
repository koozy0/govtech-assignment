"use strict";
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      studentId: { type: DataTypes.UUID, primaryKey: true },
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
