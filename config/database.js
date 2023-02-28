const mongoose = require("mongoose");
require("dotenv").config();
const dbConnection = async () => {
    try {
        mongoose.set({
            strictQuery: true,
        })
      await  mongoose.connect(process.env.MONGO_URI)
        console.log('Database is connected')

    } catch (error) {
        console.log(`Error en la base de datos: ${error}`)
    }
};


module.exports ={
    dbConnection
}