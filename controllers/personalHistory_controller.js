const { PersonalHistory } = require("../models");

const addPersonalHistory = async (req, res) => {
  const { patient, personalHistory, toxicHabits, toxicPhysiological } =
    req.body;

  const patientHistory = new PersonalHistory({
    patient,
    personalHistory,
    toxicHabits,
    toxicPhysiological,
  });

  if (!patientHistory) {
      res.status(400).json({
          status: false,
          msg: "Ocurrio un errror al crear la  historia personal",
          patientHistory,
        });
    }
      await patientHistory.save();
  res.status(200).json({
    status: true,
    msg: "Historia personal creada correctamente",
    patientHistory,
  });
};

module.exports = {
  addPersonalHistory,
};
