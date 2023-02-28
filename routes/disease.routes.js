const { Router } = require("express");
const { check } = require("express-validator");

const { validationFields } = require("../helpers/validationsFields");
const { addDisease } = require("../controllers/disease_controller");
const { patientById, registeredPatientById, existPatientById } = require("../helpers/db_validators");
const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    status: true,
    msg: "endPoint para generar la hoja medica",
    endPoints: [
      "http://localhost:3000/api/disease/add",
      "http://localhost:3000/api/disease/update",
      "http://localhost:3000/api/disease/list",
      "http://localhost:3000/api/disease/delete",
    ],
  });
});


router.post(
  "/add",
  [
    check("patient", 'Campos requeridos').not().isEmpty(),
    check("patient", 'Este no es un id valido ').isMongoId(),
    check("patient").custom(existPatientById),  
    check("patient").custom(registeredPatientById),
    check("cv", 'Campos requeridos').not().isEmpty(),
    check("description", 'Campos requeridos').not().isEmpty(),
    validationFields,
  ],
  addDisease
);

module.exports = router;
