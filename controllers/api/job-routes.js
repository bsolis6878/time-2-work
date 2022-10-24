const router = require("express").Router();
const { Job } = require("../../models");

// get all jobs
router.get("/", (req, res) => {
    Job.findAll({
      attributes: ["company_id", "job", "hourly_rate"],
    })
      .then((dbJobData) => res.json(dbJobData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// get individual job
router.get("/:id", (req, res) => {
    Job.findOne({
    attributes: ["company_id", "job", "hourly_rate"],
      where: {
        id: req.params.id,
      },
    })
      .then((dbJobData) => {
        if (!dbJobData) {
          res.status(404).json({ message: "No job found with this id" });
          return;
        }
        res.json(dbJobData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// create job
router.post("/", (req, res) => {
    Job.create({
      company_id: req.body.company_id,
      job: req.body.job,
      hourly_rate: req.body.hourly_rate
    })
      .then((dbJobData) => res.json(dbJobData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// update job
router.put("/:id", (req, res) => {
    // pass in req.body instead to only update what's passed through
    Job.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((dbJobData) => {
        if (!dbJobData[0]) {
          res.status(404).json({ message: "No job found with this id" });
          return;
        }
        res.json(dbJobData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// delete job
router.delete("/:id", (req, res) => {
    Job.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbJobData) => {
        if (!dbJobData) {
          res.status(404).json({ message: "No job found with this id" });
          return;
        }
        res.json(dbJobData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;