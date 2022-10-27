const router = require("express").Router();
const { Employee } = require("../../models");

// get all employees
router.get("/", (req, res) => {
    Employee.findAll({
      attributes: ["company_id", "user_id", "role_id", "manager_id"],
    })
      .then((dbEmployeeData) => res.json(dbEmployeeData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// get individual employee
router.get("/:id", (req, res) => {
    Employee.findOne({
    attributes: ["company_id", "user_id", "role_id", "manager_id"],
      where: {
        id: req.params.id,
      },
    })
      .then((dbEmployeeData) => {
        if (!dbEmployeeData) {
          res.status(404).json({ message: "No employee found with this id" });
          return;
        }
        res.json(dbEmployeeData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// create employee
router.post("/", (req, res) => {
    Employee.create({
      company_id: req.body.company_id,
      user_id: req.body.user_id,
      role_id: req.body.role_id,
      manager_id: req.body.manager_id
    })
      .then((dbUserData) => {

        req.session.reload(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          console.log(dbUserData.user);
          req.session.role = dbUserData.role_id;
          req.session.employee_id = dbUserData.id;
          req.session.company_id = dbUserData.company_id;
          //req.session.company = dbUserData.employee.dataValues.company_id;
          req.session.loggedIn = true;


    })

  });
});

// update employee
router.put("/:id", (req, res) => {
    // pass in req.body instead to only update what's passed through
    Employee.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((dbEmployeeData) => {
        if (!dbEmployeeData[0]) {
          res.status(404).json({ message: "No employee found with this id" });
          return;
        }
        res.json(dbEmployeeData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// delete employee
router.delete("/:id", (req, res) => {
    Employee.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbEmployeeData) => {
        if (!dbEmployeeData) {
          res.status(404).json({ message: "No employee found with this id" });
          return;
        }
        res.json(dbEmployeeData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;