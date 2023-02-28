const {model, Schema} = require('mongoose')


const medicineShema = Schema({
    name:{
        type: String,
        require: true 
    },

})

module.exports = model('Medicine', medicineShema)