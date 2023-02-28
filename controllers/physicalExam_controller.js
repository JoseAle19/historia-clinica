const { PhysicalExam } = require("../models/");

const adddPhysicalExam = async (req, res) => {
  const { patient, weight, height, imc, generalImpression, datos } = req.body;

  const physicalExam = new PhysicalExam({
    patient,
    weight,
    height,
    imc,
    generalImpression,
    datos,
  });

  if (!physicalExam) {
    res.status(400).json({
      status: false,
      msg: "Ocurrio un error al crear las enfermedades del paciente",
      physicalExam: null,
    });
  }

    await physicalExam.save();
  res.status(200).json({
    status: true,
    msg: "Enfermedades guardada correctamente",
    physicalExam,
  });
};

module.exports = {
  adddPhysicalExam,
};
