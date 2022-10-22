const router = require("express").Router();
const { Employee } = require("../models");

// render homepage
router.get("/", (req, res) => {
    res.render("homepage");
});

// renders signup page
router.get("/signup", (req, res) => {
    res.render("signup");
});

// renders login page
router.get("/login", (req, res) => {
    res.render("login");
});

// renders employee page
router.get("/employee", (req, res) => {
    res.render("employee");
});

// renders entrepreneur page
router.get("/entrepreneur", (req, res) => {
    Employee.findAll({
        attributes: ["company_id", "user_id", "role_id", "manager_id"],
      })
        .then(dbEmployeeData => {
            // passes employee data into the entrepreneur page
            const employees = dbEmployeeData.map(post => post.get({ plain: true }))
            res.render("entrepreneur", {
                employees,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// renders team lead page
router.get("/team-lead", (req, res) => {
    Employee.findAll({
        attributes: ["company_id", "user_id", "role_id", "manager_id"],
      })
        .then(dbEmployeeData => {
            // passes employee data into the entrepreneur page
            const employees = dbEmployeeData.map(employee => employee.get({ plain: true }))
            res.render("team-lead", {
                employees,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;