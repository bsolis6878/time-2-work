const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// create our User model
class User extends Model {
  // compares password when logging in
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// create fields/columns for User model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
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
    hooks: {
      // hooks for password hashing
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },

      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
