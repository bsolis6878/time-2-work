const router = require("express").Router();
const { Role } = require("../../models");

// get all roles
router.get("/", (req, res) => {
    Role.findAll({
      attributes: ["company_id", "role_name"],
    })
      .then((dbRoleData) => res.json(dbRoleData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// get individual role
router.get("/:id", (req, res) => {
    Role.findOne({
    attributes: ["company_id", "role_name"],
      where: {
        id: req.params.id,
      },
    })
      .then((dbRoleData) => {
        if (!dbRoleData) {
          res.status(404).json({ message: "No role found with this id" });
          return;
        }
        res.json(dbRoleData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// create role
router.post("/", (req, res) => {
    Role.create({
      company_id: req.body.company_id,
      role_name: req.body.role_name
    })
      .then((dbRoleData) => res.json(dbRoleData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// update role
router.put("/:id", (req, res) => {
    // pass in req.body instead to only update what's passed through
    Role.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((dbRoleData) => {
        if (!dbRoleData[0]) {
          res.status(404).json({ message: "No role found with this id" });
          return;
        }
        res.json(dbRoleData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// delete role
router.delete("/:id", (req, res) => {
    Role.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbRoleData) => {
        if (!dbRoleData) {
          res.status(404).json({ message: "No role found with this id" });
          return;
        }
        res.json(dbRoleData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;