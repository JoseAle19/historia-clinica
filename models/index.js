const ClinicalSheet = require("./clinicalSheet");
const Patient = require("./patient");
const Pediatrics = require("./pediatrics");
const GeneralData = require("./generalData");
const PersonalHistory = require("./personalHistory");
const PhysicalExam = require("./physicalExam");
const Disease = require("./disease");
const Prescription = require("./prescription");

module.exports = {
  Patient,
  Pediatrics,
  GeneralData,
  PersonalHistory,
  PhysicalExam,
  ClinicalSheet,
  Disease,
  Prescription,
};
