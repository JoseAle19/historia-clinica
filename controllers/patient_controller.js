const { response, request } = require("express");
const { Patient } = require("../models");






const getPatientById = async (req = request, res = response) => {
  const patient = await Patient.findById();
};

const addPatient = async (req = request, res = response) => {
  const {
    dni,
    name,
    lastname,
    age,
    occupation,
    birthdate,
    civilStatus,
    nationality,
    currentResidence,
    previoussResidence,
    Degreestudy,
  } = req.body;
  const patient = new Patient({
    dni,
    name,
    lastname,
    age,
    occupation,
    birthdate,
    civilStatus,
    nationality,
    currentResidence,
    previoussResidence,
    Degreestudy,
  });

  if (!patient) {
    res.status(400).json({
      status: false,
      msg: `No se puede dar de alta el paciente`,
      paciente: null,
    });
  }
  await patient.save();
  res.status(200).json({
    status: true,
    msg: `Paciente agregadp `,
    paciente: patient,
  });
};

module.exports = {
  getPatientById,
  addPatient,
};
