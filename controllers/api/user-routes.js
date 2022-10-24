const router = require("express").Router();
const { User } = require("../../models");

// get all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get individual user
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create user accounts
router.post("/", (req, res) => {
  // expects { "username": "left_twix99",
  //           "email": "leftyisbesty@gmail.com",
  //           "password": "righttwixsucks11$!",
  //           "name": "Star Skittles",
  //           "addr1": "106 Broadway, San Antonio TX 78254",
  //           "phone_number": "555-555-5555",
  //           "tax_id": "123-45-6005" }

  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    addr1: req.body.addr1,
    phone_number: req.body.phone_number,
    tax_id: req.body.tax_id
  })
    .then((dbUserData) => {
      // creates session using cookies upon account creation
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
    });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login route
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    // creates cookie session when logging in
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
  });
  });
});

// update user route
router.put("/:id", (req, res) => {
  // pass in req.body instead to only update what's passed through
  User.update( 
   {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    address: req.body.addr1,
    phone: req.body.phone_number,
    tax_id: req.body.tax_id
   },
   {
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete user route
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

router.put = (req, res) => {
  res
}

module.exports = router;