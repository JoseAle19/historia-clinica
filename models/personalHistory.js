const { model, Schema} = require('mongoose');


const PersonalHistorySchema = Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: [true, `El paciente es requerido`]
    },
    personalHistory: {
        type: String,
        required: [true, `La historia personal es requerida`]
    },
    toxicHabits: {
        type: [],
        required: true
    },
    toxicPhysiological : {
        type: [],
        required: true
    }
    })

    module.exports = model('PersonalHistory', PersonalHistorySchema)