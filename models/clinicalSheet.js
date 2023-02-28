const { model, Schema } = require("mongoose");

const ClinicalSheetSchema = Schema({
  pediatrics: {
    type: Schema.Types.ObjectId,
    ref: "Pediatric",
    required: [true, `Datos de pediatria requerido`],
  },
  generalData: {
    type: Schema.Types.ObjectId,
    ref: "GeneralData",
    required: [true, `Datos generales requeridos`],
  },
  disease: {
    type: Schema.Types.ObjectId,
    ref: "Disease",
    required: [true, `La enfermedad es requerida`],
  },

  personalHistory: {
    type: Schema.Types.ObjectId,
    ref: "PersonalHistory",
    required: [true, `Historia personal requerida`],
  },
  physicalExam: {
    type: Schema.Types.ObjectId,
    ref: "PhysicalExam",
    required: [true, `Examen fisico requerido`],
  },
  
  familyHistory: {
    type: String,
    required: [true, "Es requerido"],
  },


});

module.exports = model("ClinicalSheet", ClinicalSheetSchema);
