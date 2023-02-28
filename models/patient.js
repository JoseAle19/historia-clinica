const { model, Schema } = require("mongoose");

const PattientSchema = Schema({
  dni: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  civilStatus: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  currentResidence: {
    type: String,
    required: true,
  },

  previoussResidence: {
    type: String,
    required: true,
  },

  Degreestudy: {
    type: String,
    required: true,
  },

 
});

module.exports = model("Patient", PattientSchema);
