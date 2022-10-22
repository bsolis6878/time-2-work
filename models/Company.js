const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Company model
class Company extends Model {}

// create fields/columns for Company model
Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addr1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [9],
        isNumeric: true,
      },
    },
    tax_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [9],
        isNumeric: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "company",
  }
);

module.exports = Company;
