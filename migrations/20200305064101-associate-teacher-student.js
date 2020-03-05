"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("TeacherStudent", {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      teacherId: {
        type: Sequelize.UUID,
        references: {
          model: "Teacher",
          key: "teacherId",
          as: "teacherId"
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCASE"
      },
      studentId: {
        type: Sequelize.UUID,
        references: {
          model: "Student",
          key: "studentId",
          as: "studentId"
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCASE"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("TeacherStudent");
  }
};
