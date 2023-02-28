const { ClinicalSheet, Patient } = require("../models");
const { ObjectId } = require("mongoose").Types;

const getClinicalSheetById = async (req, res) => {
  const { idPediatrics } = req.params;
  const query = { pediatrics: idPediatrics };
  const clinicalSheet = await ClinicalSheet.findOne(query)
    .populate("generalData")
    .populate("personalHistory")
    .populate("physicalExam")
    .populate("pediatrics")
    .populate("disease");
  const idPatient = ObjectId(clinicalSheet.pediatrics.patient);
  const castId = idPatient.toString();
  const patientById = await Patient.findOne({ id: castId });
  res.status(200).json({
    status: true,
    msg: "Hoja medica del paciente ",
    patient: patientById,
    clinicalSheet,
  });
};

const getAllClinicalSheet = async (_, res) => {
  let clinicalSheets = await ClinicalSheet.find()
    .populate("generalData")
    .populate("personalHistory")
    .populate("physicalExam")
    .populate("pediatrics")
    .populate("disease");
  if (!clinicalSheets) {
    return res.status(400).json({
      status: false,
      msg: "Ocurrio un error al concultar las hojas medicas",
      clinicalSheets: null,
    });
  }
  return res.status(200).json({
    status: true,
    msg: "Hojas medicas",
    clinicalSheets,
  });
};

const addClinicalSheet = async (req, res) => {
  const {
    pediatrics,
    generalData,
    personalHistory,
    physicalExam,
    pathologicalHistory,
    familyHistory,
    disease,
  } = req.body;
  const clinicalSheet = new ClinicalSheet({
    pediatrics,
    generalData,
    personalHistory,
    physicalExam,
    pathologicalHistory,
    familyHistory,
    disease,
  });

  if (!clinicalSheet) {
    res.status(400).json({
      status: false,
      msg: "Ocurrio un error",
      clinicalSheet: null,
    });
  }

  await clinicalSheet.save();
  res.status(400).json({
    status: true,
    msg: "Hoja medica creada",
    clinicalSheet: clinicalSheet,
  });
};

module.exports = {
  addClinicalSheet,
  getAllClinicalSheet,
  getClinicalSheetById,
};
