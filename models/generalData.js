const { model, Schema } = require("mongoose");

const GeneralSchema = Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
        required: [true, `El paciente es requerido`],
    },
    reason:{
        type: String,
        required: [true, `El motivo de consulta es requerido`],
    },
    currentIllness:{
        type: String,
        required: [true, `La enfermedad actual es requerida`],
    },
    presentIllness:{
        type: String,
        required: [true, `Antecedentes de enfermedad actual es requerida`],
    }
});


module.exports = model("GeneralData", GeneralSchema);