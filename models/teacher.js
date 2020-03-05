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
    // associations can be defined here
  };

  return Teacher;
};
