const { Router } = require("express");
const { check } = require("express-validator");
const { addPediatrics } = require("../controllers/pediatrics_controller");
const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    status: true,
    msg: "endPoint para generar la hoja medica",
    endPoints: [
      "http://localhost:3000/api/pediatrics/add-pediatric",
      "http://localhost:3000/api/pediatrics/list-pediatric",
      "http://localhost:3000/api/pediatrics/update-pediatric",
      "http://localhost:3000/api/pediatrics/delete-pediatric",
    ],
  });
});

router.post('/add-pediatric',[
check("patient", 'Este no es id valido').isMongoId(),
check("fatherName", 'Este campo es requerido').not().isEmpty(),
check("matherName", 'Este campo es requerido').not().isEmpty(),
check("birth", 'Este campo es requerido').not().isEmpty(),
check("vaccines", 'Este campo es requerido').not().isEmpty(),
], addPediatrics)


// TODO: falata el update y el delete

module.exports = router;
