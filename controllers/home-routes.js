const router = require("express").Router();
const { Employee, User } = require("../models");

// render homepage

router.get('/', (req, res) => {
    console.log('======================');
    User.findAll({
      attributes: [
        'id',
        'username',
        'email'
      ],
  
    })
      .then(dbUserData => {
        const user = dbUserData.map(user => user.get({ plain: true }));
        
        res.render('homepage', {
          user,
          loggedIn: req.session.loggedIn,
          name: req.session.username
         
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
  
    })
      .then(dbUserData => {
        const user = dbUserData.map(user => user.get({ plain: true }));
        
        res.render("manage", {
          user,
          loggedIn: req.session.loggedIn,
          name: req.session.username
         
        });
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
    res.render("paycheck");
});

// renders task page
router.get("/task", (req, res) => {
    res.render("task");
});

module.exports = router;