const { Disease } = require("../models");

const addDisease = async (req, res) => {
  const { patient, cv, description } = req.body;

  const disease = new Disease({
    patient,
    cv,
    description,
  });

  if (!disease) {
    res.status(400).json({
      status: false,
      msg: "Ocurrio un error al crear las enfermedades del paciente",
      disease: null,
    });
  }

//   await disease.save();
  res.status(200).json({
    status: true,
    msg: "Enfermedades guardada correctamente",
    disease,
  });
};

module.exports = {

    addDisease,
};
