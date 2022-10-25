const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const employeeRoutes = require("./employee-routes.js");
const companyRoutes = require("./company-routes.js");
const jobRoutes = require("./job-routes.js");
const roleRoutes = require("./role-routes.js");
const timelogRoutes = require("./timelog-routes.js");

router.use("/users", userRoutes);
router.use("/employees", employeeRoutes);
router.use("/companies", companyRoutes);
router.use("/jobs", jobRoutes);
router.use("/roles", roleRoutes);
router.use("/timelog", timelogRoutes);

module.exports = router;