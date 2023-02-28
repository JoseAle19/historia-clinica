const { model, Schema } = require("mongoose");

const DiseaseShema = Schema({
  patient: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: [true, `Es necesario ser un paciente`],
  },
  cv: {
    type: String,
    required: [true, `Es cv requerido`],
  },

  //Aca en description iran las enfermedades como objeto {  "Respiratorio": 'sin datos patologicos aparentes ' } este es un ejemplo
  description: {
    type: [],
    require: true,
  },
});

module.exports = model("Disease", DiseaseShema);
