const {model, Schema } = require("mongoose")


const rolSchema = Schema({
    role: {
        type: String,
        required: [true, "El rol es requerido"]
    }
})

module.exports = model("Rol", rolSchema)
