const router = require("express").Router();
const { Timelog } = require("../../models");

// get all timelogs
router.get("/", (req, res) => {
    Timelog.findAll({
      attributes: ["company_id", "employee_id", "job_id", "minutes_worked"],
    })
      .then((dbTimelogData) => res.json(dbTimelogData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// get individual timelog
router.get("/:id", (req, res) => {
    Timelog.findOne({
    attributes: ["company_id", "employee_id", "job_id", "minutes_worked"],
      where: {
        id: req.params.id,
      },
    })
      .then((dbTimelogData) => {
        if (!dbTimelogData) {
          res.status(404).json({ message: "No timelog found with this id" });
          return;
        }
        res.json(dbTimelogData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// create timelog
router.post("/", (req, res) => {
    Timelog.create({
      company_id: req.body.company_id,
      employee_id: req.body.employee_id,
      job_id: req.body.job_id,
      minutes_worked: req.body.minutes_worked
    })
      .then((dbTimelogData) => res.json(dbTimelogData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// update timelog
router.put("/:id", (req, res) => {
    // pass in req.body instead to only update what's passed through
    Timelog.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((dbTimelogData) => {
        if (!dbTimelogData[0]) {
          res.status(404).json({ message: "No timelog found with this id" });
          return;
        }
        res.json(dbTimelogData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// delete timelog
router.delete("/:id", (req, res) => {
    Timelog.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbTimelogData) => {
        if (!dbTimelogData) {
          res.status(404).json({ message: "No timelog found with this id" });
          return;
        }
        res.json(dbTimelogData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;