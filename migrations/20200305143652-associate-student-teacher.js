"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "StudentTeacher",
      {
        studentId: {
          type: Sequelize.UUID,
          references: {
            model: "Students",
            key: "id"
          },
          allowNull: false,
          onDelete: "cascade",
          onUpdate: "cascade"
        },
        teacherId: {
          type: Sequelize.UUID,
          references: {
            model: "Teachers",
            key: "id"
          },
          allowNull: false,
          onDelete: "cascade",
          onUpdate: "cascade"
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("StudentTeacher");
  }
};
