const { Router } = require("express");
const { check } = require("express-validator");
const { validationFields } = require("../helpers/validationsFields");
const {
  existPatientById,
  registeredPatientById,
} = require("../helpers/db_validators");
const { adddPhysicalExam } = require("../controllers/physicalExam_controller");
const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    status: true,
    msg: "endPoint para generar la hoja medica",
    endPoints: [
      "http://localhost:3000/api/physicalExam/add",
      "http://localhost:3000/api/physicalExam/update",
      "http://localhost:3000/api/physicalExam/list",
      "http://localhost:3000/api/physicalExam/delete",
    ],
  });
});

router.post(
  "/add",
  [
    check("patient", "Este no es un id valido").isMongoId(),
    check("patient").custom(existPatientById),  
    check("patient").custom(registeredPatientById),
    check("weight", "Los campos son requeridos").not().isEmpty(),
    check("weight", "Solo numeros").isNumeric(),
    check("height", "Los campos son requeridos").not().isEmpty(),
    check("height", "Solo numeros").isNumeric(),
    check("imc", "Los campos son requeridos").not().isEmpty(),
    check("imc", "Solo numeros").isNumeric(),
    check("generalImpression", "Los campos son requeridos").not().isEmpty(),
    check("datos", "Los campos son requeridos").not().isEmpty(),
    validationFields,
  ],
  adddPhysicalExam
);
// TODO: falta el update y el delete

module.exports = router;
