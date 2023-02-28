const { Pediatrics } = require("../models");
const pediatrics = require("../models/pediatrics");

const addPediatrics = async (req, res) => {
  const { patient, fatherName, matherName, birth, vaccines } = req.body;

  const pediatric = new pediatrics({
    patient,
    fatherName,
    matherName,
    birth,
    vaccines,
  });
  if (!pediatric) {
    res.status(400).json({
      status: false,
      msg: "Ocurrio un error",
      pediatric: null
    });
}
await pediatric.save()
res.status(200).json({
  status: true,
  msg: "Datos agregados",
  pediatric
});
};

module.exports = {
  addPediatrics,
};
