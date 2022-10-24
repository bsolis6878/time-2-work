const router = require("express").Router();
const { Company } = require("../../models");

// get all companies
router.get("/", (req, res) => {
    Company.findAll({
      attributes: ["name", "addr1", "phone_number", "tax_id"],
    })
      .then((dbCompanyData) => res.json(dbCompanyData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// get individual company
router.get("/:id", (req, res) => {
    Company.findOne({
    attributes: ["name", "addr1", "phone_number", "tax_id"],
      where: {
        id: req.params.id,
      },
    })
      .then((dbCompanyData) => {
        if (!dbCompanyData) {
          res.status(404).json({ message: "No company found with this id" });
          return;
        }
        res.json(dbCompanyData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// create company
router.post("/", (req, res) => {
    Company.create({
      name: req.body.name,
      addr1: req.body.addr1,
      phone_number: req.body.phone_number,
      tax_id: req.body.tax_id
    })
      .then((dbCompanyData) => res.json(dbCompanyData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// update company
router.put("/:id", (req, res) => {
    // pass in req.body instead to only update what's passed through
    Company.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((dbCompanyData) => {
        if (!dbCompanyData[0]) {
          res.status(404).json({ message: "No company found with this id" });
          return;
        }
        res.json(dbCompanyData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// delete company
router.delete("/:id", (req, res) => {
    Company.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbCompanyData) => {
        if (!dbCompanyData) {
          res.status(404).json({ message: "No company found with this id" });
          return;
        }
        res.json(dbCompanyData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;