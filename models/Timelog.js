const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Timelog model
class Timelog extends Model {}

// create fields/columns for Timelog model
Timelog.init(
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
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "employee",
        key: "id",
      },
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "job",
        key: "id",
      },
    },
    minutes_worked: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "timelog",
  }
);

module.exports = Timelog;
