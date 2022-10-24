// import all models
const Company = require("./Company");
const Employee = require("./Employee");
const Job = require("./Job");
const Role = require("./Role");
const Timelog = require("./Timelog");
const User = require("./User");

// create associations

module.exports = { User, Company, Role, Employee };
// Model -User
//// User to Employee
User.hasMany(Employee, {
  foreignKey: "user_id",
});

Employee.belongsTo(User, {
  foreignKey: "user_id",
});

// Model - Role
Role.hasMany(Employee, {
  foreignKey: "role_id",
});

Employee.belongsTo(Role, {
  foreignKey: "role_id",
});

// Model - Job
Job.hasMany(Employee, {
  foreignKey: "job_id",
});

Employee.belongsTo(Job, {
  foreignKey: "job_id",
});

// Model - Company
Company.hasMany(Employee, {
  foreignKey: "company_id",
});

Employee.belongsTo(Company, {
  foreignKey: "company_id",
});

module.exports = { Company, Employee, Job, Role, Timelog, User };
