const mongoose = require("mongoose")
const {Schema} = mongoose

//Creacion esquema de la base de datos en DB
const WaterQualityScheme = new Schema(
    {
        place: {type: String, required: true},
        station: {type: Number, required: true},
        turbidity: {type: Number},
        color: {type: Array, default: [0,0,0]}, //RGB ID 
        conductivity: {type: Number, default: 0},
        PH: {type: Number, default: 0},
        temperature: {type: Number, default: 0},

    }, {   //Datos adicionales en el esquema
        timestamps: true,      //Fecha
    }
);

//Como usar el esquema como un modelo
module.exports = mongoose.model("waterq", WaterQualityScheme);   //Waterq es el nombre de los elementos en la base de datos
