const { Router } = require("express");
const router = Router();

const {
  addGeneralDataPatient,
} = require("../controllers/generalData_controller");
const { check } = require("express-validator");
const { validationFields } = require("../helpers/validationsFields");

router.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    msg: "endPoint para rutas generales del paciente",
    endPoints: [
      "http://localhost:3000/api/generalData",
      "http://localhost:3000/api/generalData/add",
      "http://localhost:3000/api/generalData/update",
      "http://localhost:3000/api/generalData/list",
      "http://localhost:3000/api/generalData/delete",
    ],
  });
});

router.post("/add", [
    check("patient", "El paciente es obligatorio").not().isEmpty(),
    check("patient", "El id del paciente no es valido").isMongoId(),
    check("reason", "La razon de la consulta es obligatoria").not().isEmpty(),
    check("currentIllness", "La enfermedad actual es obligatoria").not().isEmpty(),
    validationFields    
],addGeneralDataPatient);


// TODO: falta el update y el delete

module.exports = router;
