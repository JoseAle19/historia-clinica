const {model, Schema} = require('mongoose')


const PediatricsSchema = Schema({
    patient:{
        type: Schema.Types.ObjectId,
        ref:'Patient',
        required:[true, `Es necesario ser un paciente`]
    },
    fatherName:{
        type: String,
        required: [true,`El nombre del padre es requerido`]
    },
    matherName:{
        type: String,
        required: [true,`El nombre del padre es rquerido`]
    },
    birth:{
        type: String,
        default:`Sin complicaciones`
    },
    vaccines:{
        type: [],
        required: true
    }
})
    
module.exports =  model('Pediatric', PediatricsSchema)