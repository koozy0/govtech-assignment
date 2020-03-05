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
          model: "Teachers",
          key: "teacherId"
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      studentId: {
        type: Sequelize.UUID,
        references: {
          model: "Students",
          key: "studentId"
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("TeacherStudent");
  }
};
