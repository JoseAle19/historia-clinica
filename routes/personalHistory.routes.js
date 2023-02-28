const { Router } = require("express");
const { check } = require("express-validator");
const {
  addPersonalHistory,
} = require("../controllers/personalHistory_controller");
const { validationFields } = require("../helpers/validationsFields");
const {
  registeredPatientById,
  existPatientById,
} = require("../helpers/db_validators");
const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    status: true,
    msg: "endPoint para generar la hoja medica",
    endPoints: [
      "http://localhost:3000/api/personalHistory/add-personalHistory",
      "http://localhost:3000/api/personalHistory/list-personalHistory",
      "http://localhost:3000/api/personalHistory/update-personalHistory",
      "http://localhost:3000/api/personalHistory/delete-personalHistory",
    ],
  });
});

router.post(
  "/add-personalHistory",
  [
    check("patient", "Campo requerido").not().isEmpty(),
    check("patient", "Este no es un id valido").isMongoId(),
    check("patient").custom(existPatientById),  
    check("patient").custom(registeredPatientById),
    check("personalHistory", "Campo requerido").not().isEmpty(),
    check("toxicHabits", "Campo requerido").not().isEmpty(),
    check("toxicPhysiological", "Campo requerido").not().isEmpty(),
    validationFields,
  ],
  addPersonalHistory
);
// TODO: falta el update y el delete

module.exports = router;
