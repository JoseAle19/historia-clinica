const { model, Schema } = require("mongoose");

const Prescriptionchema = Schema({
  indications: {
    type: String,
    required: [true, `Requiere indicaciones de este medicamento`],
  },
  medicine: {
    type: Schema.Types.ObjectId,
    ref: "Medicine",
  },
  amount:{
    type: Number,
    required: [true, `La cantidad por medicamento es requerida`]
  },
  
});

module.exports = model("Prescription", Prescriptionchema);
