const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Employee model
class Employee extends Model {}

// create Employee model
Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "company",
        key: "id",
      },
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "role",
        key: "id",
      },
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "employee",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    // Removing for now as we setup the MVP.
    //This ID is meant as a company assigned ID. Some companies use initials like GGC, BKB, RKN. Some use employee numbers like 332245, 323425, 656333. The employer may add the company id that is in their format.
    // employee_id: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "employee",
  }
);

module.exports = Employee;
