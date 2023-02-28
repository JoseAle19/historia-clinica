const { Router } = require("express");
const { check } = require("express-validator");
const {
  addClinicalSheet,
  getAllClinicalSheet,
  getClinicalSheetById,
} = require("../controllers/clinicalSheet_controller");
const { validationFields } = require("../helpers/validationsFields");
const { existPediatricsById } = require("../helpers/db_validators");
const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    status: true,
    msg: "endPoint para generar la hoja medica",
    endPoints: [
      "http://localhost:3000/api/clinicalSheet/add-clinicalSheet",
      "http://localhost:3000/api/clinicalSheet/update-clinicalSheet",
      "http://localhost:3000/api/clinicalSheet/delete-clinicalSheet",
      "http://localhost:3000/api/clinicalSheet/list-clinicalSheet",
    ],
  });
});

router.get("/list-clinicalSheet", getAllClinicalSheet);
router.get("/listByID-clinicalSheet/:idPediatrics", getClinicalSheetById);






router.post(
  "/add-clinicalSheet",
  [
    check("pediatrics", "Este no es un id valido").isMongoId(),
    check('pediatrics').custom(existPediatricsById),
    check("generalData", "Este no es un id valido").isMongoId(),
    check("personalHistory", "Este no es un id valido").isMongoId(),
    check("physicalExam", "Este no es un id valido").isMongoId(),
    check("familyHistory", "Este campo es requerido").not().isEmpty(),
    check("disease", "Este no es un id valido").isMongoId(),
    validationFields,
  ],
  addClinicalSheet
);
// TODO: falata el update y el delete

module.exports = router;
