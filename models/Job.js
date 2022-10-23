const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Job model
class Job extends Model {}

// create fields/columns for Job model
Job.init(
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
    job: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hourly_rate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "job",
  }
);

module.exports = Job;
