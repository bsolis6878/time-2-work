const router = require("express").Router();
const { Employee, User, Timelog } = require("../models");

// render homepage

router.get('/', (req, res) => {
    console.log('======================');
    User.findAll({
      attributes: [
        'id',
        'username',
        'email'
      ],
      include: [
        {
          model: Employee,
          attributes: ['id', 'company_id', 'role_id', 'manager_id', 'user_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
      ]
  
    })
      .then(dbUserData => {
        const user = dbUserData.map(user => user.get({ plain: true }));
        const employee = dbUserData.map(employee => employee.get({ plain: true }));
        if (req.session.role === 1) {
          res.redirect('/entrepreneur')
        }
        else if (req.session.role === 2) {
          res.redirect('/team-lead')
        }
        else if (req.session.role === 3) {
          res.redirect('/employee')
        }else

        res.render('homepage', {
          user,
          employee,
          loggedIn: req.session.loggedIn,
          name: req.session.username,
          role: req.session.role
         
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// renders signup page
router.get("/signup", (req, res) => {
    res.render("signup");
});

router.get("/manage", (req, res) => {
    console.log('======================');
    User.findAll({
      attributes: [
        'id',
        'username',
        'email',
        'password',
        'name',
        'addr1',
        'phone_number',
        'tax_id'

      ],
      include: [
        {
          model: Employee,
          attributes: ['id', 'company_id', 'role_id', 'manager_id', 'user_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
      ]
  
    })
      .then(dbUserData => {
        const user = dbUserData.map(user => user.get({ plain: true }));
        const employee = dbUserData.map(employee => employee.get({ plain: true }));
        
        res.render("manage", {
          user,
          employee,
          loggedIn: req.session.loggedIn,
          name: req.session.username,
          
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    
});

router.get('/edit/:id', (req, res) => {
 res.render('edit');
   });


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
     res.redirect('/');
      return;
    }
  
    res.render('login');
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

// renders addjobs page
router.get("/addjobs", (req, res) => {
    res.render("addjobs");
});

// renders addrole page
router.get("/addrole", (req, res) => {
    res.render("addrole");
});

// renders manage page
router.get("/manage", (req, res) => {
    res.render("manage");
});

// renders paycheck page
router.get("/paycheck", (req, res) => {
  Timelog.findAll({
    attributes: ["id", "company_id", "employee_id", "job_id", "hours_worked"],
  })
    .then(dbTimelogData => {
        // passes employee data into the entrepreneur page
        const timelogs = dbTimelogData.map(timelog => timelog.get({ plain: true }))
        res.render("paycheck", {
            timelogs
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// renders task page
router.get("/task", (req, res) => {
  
    res.render("task", {
      loggedIn: req.session.loggedIn,
      name: req.session.username,
      eid: req.session.employee_id
    });
});
//renders add company page
router.get("/addcompany", (req, res) => {
  res.render("addcompany");
});

//renders add employee page
router.get("/addemployee", (req, res) => {
  res.render("addemployee");
});

module.exports = router;