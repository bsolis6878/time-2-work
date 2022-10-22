const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const employeeRoutes = require("./employee-routes.js");

router.use("/users", userRoutes);
router.use("/employees", employeeRoutes);

module.exports = router;