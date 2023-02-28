const { Router } = require("express");
const { check } = require("express-validator");
const { addPatient } = require("../controllers/patient_controller");
const { validationFields } = require("../helpers/validationsFields");
const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    status: true,
    msg: "endPoint para pacientes",
    endPoints: [
      "http://localhost:3000/api/patient/add-patient",
      "http://localhost:3000/api/patient/update-patient",
      "http://localhost:3000/api/patient/delete-patient",
      "http://localhost:3000/api/patient/get-patient",
      "http://localhost:3000/api/patient/getById-patient/:id",
    ],
  });
});

router.post(
  "/add-patient",
  [
    check("dni", 'Este campo es requerido').not().isEmpty(),
    check("name", 'Este campo es requerido').not().isEmpty(),
    check("lastname", 'Este campo es requerido').not().isEmpty(),
    check("age", 'Este campo es requerido').not().isEmpty(),
    check("occupation", 'Este campo es requerido').not().isEmpty(),
    check("birthdate", 'Este campo es requerido').not().isEmpty(),
    check("civilStatus", 'Este campo es requerido').not().isEmpty(),
    check("nationality", 'Este campo es requerido').not().isEmpty(),
    check("currentResidence", 'Este campo es requerido').not().isEmpty(),
    check("previoussResidence", 'Este campo es requerido').not().isEmpty(),
    check("Degreestudy", 'Este campo es requerido').not().isEmpty(),
    validationFields
  ],
  addPatient
);

// TODO: falta el update y el delete

module.exports = router;
