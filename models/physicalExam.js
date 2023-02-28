const { model, Schema } = require("mongoose");

const PhysicalExamSchema = Schema({
  patient: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: [true, `El paciente es requerido`],
  },

  weight: {
    type: Number,
    required: [true, `El peso es requerido`],
  },
  height: {
    type: Number,
    required: [true, `La altura es requerida`],
  },
  imc: {
    type: Number,
    required: [true, `El imc es requerido`],
  },

  generalImpression: {
    type: String, 
    required: [true, `La impresion general es requerida`],
  },

  datos: {
    type: [],
    required: true,
  },
});




module.exports = model("PhysicalExam", PhysicalExamSchema);