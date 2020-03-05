"use strict";
const { v4: uuid } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      email: DataTypes.STRING,
      suspended: DataTypes.BOOLEAN
    },
    {}
  );

  Student.beforeCreate(student => (student.id = uuid()));

  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
