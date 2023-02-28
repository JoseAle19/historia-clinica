const { Patient, Pediatrics } = require("../models");

const patientById = async (patient = "") => {
  console.log("pasa por aca ");
  const patientExist = await Patient.findById(patient);
  if (patientExist) {
    throw new Error(`El paciente con el id ${patient} ya esta registrado`);
  }
};

const existPediatricsById = async (id) => {
  const pediatric = await Pediatrics.findById(id);
  if(!pediatric){
    throw new Error(`La pediatria con este id ya esta registrado id ${id}`);
  }
};
 


const registeredPatientById = async (id) => {
  const patient = await Patient.findById(id);
  if(!patient){
    console.log(patient)
    throw new Error(`El paciente con este id ya esta registrado id ${id}`);
  } 
};

const existPatientById = async (id) => {
  const patient = await Patient.findById(id);
  if(!patient){
    throw new Error(`El id del paciente no xciste id: ${id}`);
  } 
};





module.exports = {
  patientById,
    existPediatricsById,
    registeredPatientById,
    existPatientById    
};
