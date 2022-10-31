const router = require("express").Router();
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");

const { Employee, User, Timelog, Job, Role, Company } = require("../models");

// render homepage

router.get("/", (req, res) => {
  console.log("======================");
  User.findAll({
    attributes: ["id", "username", "email"],
    include: [
      {
        model: Employee,
        attributes: ["id", "company_id", "role_id", "manager_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbUserData) => {
      const user = dbUserData.map((user) => user.get({ plain: true }));

      if (req.session.role === 1) {
        res.redirect("/entrepreneur");
      } else if (req.session.role === 2) {
        res.redirect("/team-lead");
      } else if (req.session.role === 3) {
        res.redirect("/employee");
      } else
        res.render("homepage", {
          user,
          loggedIn: req.session.loggedIn,
          name: req.session.username,
          rid: req.session.role_id,
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// renders signup page
router.get("/signup", (req, res) => {
  Role.findAll({
    attributes: ["id", "role_name"],
  })
    .then((dbUserData) => {
      const roles = dbUserData.map((roles) => roles.get({ plain: true }));

      res.render("signup", {
        roles,
        loggedIn: req.session.loggedIn,
        name: req.session.username,
        user_id: req.session.user_id,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/manage", withAuth, (req, res) => {
  console.log("======================");
  Employee.findAll({
    attributes: ["id", "company_id", "role_id", "manager_id", "user_id"],
    include: [
      {
        model: User,
        attributes: [
          "id",
          "username",
          "email",
          "phone_number",
          "addr1",
          "name",
          "createdAt",
          "updatedAt",
        ],
      },
      {
        model: Role,
        attributes: ["id", "role_name"],
      },
      {
        model: Company,
        attributes: ["id", "name"],
      },
    ],
  })

    .then((dbUserData) => {
      const user = dbUserData.map((user) => user.get({ plain: true }));
      const employee = dbUserData.map((employee) =>
        employee.get({ plain: true })
      );
      const role = dbUserData.map((role) => role.get({ plain: true }));
      res.render("manage", {
        user,
        employee,
        loggedIn: req.session.loggedIn,
        name: req.session.username,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get("/setrole", (req, res) => {
  Role.findAll({
    attributes: ["id", "role_name"],
  })
    .then((dbUserData) => {
      const roles = dbUserData.map((roles) => roles.get({ plain: true }));

      res.render("setrole", {
        roles,
        loggedIn: req.session.loggedIn,
        name: req.session.username,
        uid: req.session.user_id,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// router.get('/:id', (req, res) => {
//   User.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbUserData) => {
//       if (!dbUserData) {
//         res.status(404).json({ message: "No user found with this id" });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.get("/edit/:id", (req, res) => {
  User.findByPk(req.params.id, {
    attributes: [
      "id",
      "username",
      "email",
      "password",
      "name",
      "addr1",
      "phone_number",
      "tax_id",
    ],
  })
    .then((dbUserData) => {
      const user = dbUserData.get({ plain: true });
      res.render("edit", {
        user,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});
// renders employee page
router.get("/employee", (req, res) => {
  res.render("employee", {
    loggedIn: req.session.loggedIn,
  });
});

// renders entrepreneur page
router.get("/entrepreneur", (req, res) => {
  Employee.findAll({
    attributes: ["id", "company_id", "role_id", "manager_id", "user_id"],
    include: [
      {
        model: User,
        attributes: ["id", "username", "name", "createdAt", "updatedAt"],
      },
      {
        model: Role,
        attributes: ["id", "role_name"],
      },
      {
        model: Company,
        attributes: ["id", "name"],
      },
    ],
  })

    .then((dbUserData) => {
      // passes employee data into the entrepreneur page

      const user = dbUserData.map((employee) => employee.get({ plain: true }));
      const userNoRole = dbUserData.map((post) => post.get({ plain: true }));
      console.log(user);
      res.render("entrepreneur", {
        user,
        name: req.session.username,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// renders team lead page
router.get("/team-lead", (req, res) => {
  Employee.findAll({
    attributes: ["company_id", "user_id", "role_id", "manager_id"],
    include: [
      {
        model: Role,
        attributes: ["role_name"],
      },
      {
        model: User,
        attributes: ["name"],
      },
    ],
  })
    .then((dbEmployeeData) => {
      // passes employee data into the entrepreneur page
      const employees = dbEmployeeData.map((employee) =>
        employee.get({ plain: true })
      );
      console.log(dbEmployeeData.roles);
      res.render("team-lead", {
        employees,
        name: req.session.username,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// renders addjobs page
router.get("/addjobs", (req, res) => {
  Company.findAll({
    attributes: ["id", "name"],
  }).then((dbCompanyData) => {
    // passes employee data into the entrepreneur page
    const company = dbCompanyData.map((companies) =>
      companies.get({ plain: true })
    );

    res.render("addjobs", {
      company,
      loggedIn: req.session.loggedIn,
      cid: req.session.company_id,
    });
  });
});

// renders addrole page
router.get("/addrole", (req, res) => {
  Company.findAll({
    attributes: ["id", "name"],
  }).then((dbCompanyData) => {
    // passes employee data into the entrepreneur page
    const company = dbCompanyData.map((companies) =>
      companies.get({ plain: true })
    );
    res.render("addrole", {
      company,
      loggedIn: req.session.loggedIn,
      cid: req.session.company_id,
    });
  });
});

// renders manage page
router.get("/manage", (req, res) => {
  res.render("manage");
});

// renders paycheck page
router.get("/paycheck", (req, res) => {
  Timelog.findAll({
    where: {
      employee_id: req.session.employee_id,
    },
    attributes: [
      "id",
      "company_id",
      "employee_id",
      "job_id",
      "minutes_worked",
      // custom field - total minutes
      [
        sequelize.literal(
          "(SELECT sum(minutes_worked) as total_minutes FROM timelog WHERE timelog.employee_id = " +
            req.session.employee_id +
            " GROUP BY timelog.employee_id)"
        ),
        "total_minutes",
      ],
      // end custom field - total minutes
    ],
    include: [
      {
        model: Job,
        attributes: ["job", "hourly_rate"],
      },
    ],
  })
    .then((dbTimelogData) => {
      // passes employee data into the entrepreneur page
      const timelogs = dbTimelogData.map((timelog) =>
        timelog.get({ plain: true })
      );
      res.render("paycheck", {
        timelogs,
        loggedIn: req.session.loggedIn,
        name: req.session.username,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// renders task page
router.get("/task", (req, res) => {
  Job.findAll({
    attributes: ["id", "company_id", "job", "hourly_rate"],
  }).then((dbUserData) => {
    const job = dbUserData.map((job) => job.get({ plain: true }));

    res.render("task", {
      job,
      loggedIn: req.session.loggedIn,
      name: req.session.username,
      eid: req.session.employee_id,
      cid: req.session.company_id,
    });
  });
});
//renders add company page
router.get("/addcompany", (req, res) => {
  res.render("addcompany");
});

//renders add employee page
router.get("/addemployee", (req, res) => {
  User.findAll({
    attributes: ["id", "name"],
  }).then((dbUserData) => {
    const users = dbUserData.map((user) => user.get({ plain: true }));

    res.render("addemployee", {
      users,
      cid: req.session.company_id,
      name: req.session.username,
      loggedIn: req.session.loggedIn,
    });
  });
});

module.exports = router;
