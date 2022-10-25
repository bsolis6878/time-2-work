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
      type: DataTypes.STRING,
      allowNull: false,
      // Had to change to string since 1. INT is not large enough, BIGINT is needed, 2. leading zeroes would be removed. Better to receive the formatted and controlled phone number from front end.
      // validate: {
      //   len: [10],
      //   isNumeric: true,
      // },
    },
    tax_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // keeping as INTEGER. Input from user should be cleaned and stored as numeric. Output to user should add the hyphens. Format for user 000-00-0000. Format for company (EIN) 00-0000000.
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
