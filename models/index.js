// import all models
const Company = require("./Company");
const Employee = require("./Employee");
const Job = require("./Job");
const Role = require("./Role");
const Timelog = require("./Timelog");
const User = require("./User");

// create associations

// Model -User
//// User to Employee
Employee.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

User.hasMany(Employee, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// Model - Role
Employee.belongsTo(Role, {
  foreignKey: "role_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Role.hasMany(Employee, {
  foreignKey: "role_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Role.belongsTo(Company, {
  foreignKey: "company_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Company.hasMany(Role, {
  foreignKey: "company_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// Model - Job
Job.belongsTo(Company, {
  foreignKey: "company_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Company.hasMany(Job, {
  foreignKey: "company_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// Model - Company
Employee.belongsTo(Company, {
  foreignKey: "company_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Company.hasMany(Employee, {
  foreignKey: "company_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// Model - Timelog
Timelog.belongsTo(Company, {
  foreignKey: "company_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Company.hasMany(Timelog, {
  foreignKey: "company_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Timelog.belongsTo(Employee, {
  foreignKey: "employee_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Employee.hasMany(Timelog, {
  foreignKey: "employee_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Timelog.belongsTo(Job, {
  foreignKey: "job_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Job.hasMany(Timelog, {
  foreignKey: "job_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// Model - Employee
Employee.belongsTo(Employee, {
  foreignKey: "manager_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = { Company, Employee, Job, Role, Timelog, User };
