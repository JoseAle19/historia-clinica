const { GeneralData } = require("../models");

const addGeneralDataPatient = async (req, res) => {
  const { patient, reason, currentIllness, presentIllness } = req.body;

  const generalData = new GeneralData({
    patient,
    reason,
    currentIllness,
    presentIllness,
  });

  if (!generalData) {
    res.status(400).json({
      status: false,
      msg: "Ocurrio un error al crear los datos generales del paciente",
      generalDataDB : null,
    });
  }
  await generalData.save();
  res.status(200).json({
    status: true,
    msg: "Datos generales del paciente guardados correctamente",
    generalData,
  });
};

module.exports = {
  addGeneralDataPatient,
};
