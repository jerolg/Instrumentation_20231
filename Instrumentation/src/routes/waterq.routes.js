const express = require("express")
const router = express.Router()

// Importar el esquema a usar en este router
const wateQ = require("../models/waterq.js")

//Ledtura de todos los datos en la base de datos
router.get("/", async (req, res, next) => {    //async : funcion asincrona (es flexible ante los tiempos de respuesta del server)
    //Realizamos un requerimiento a la base de datos
    const waterqObj = await WaterQ.find();
    //Enviamos los datos como JSON
    res.json(waterqObj);
});

//POstear datos en la base de datos
router.post("/", async (req, res, next) => {
    //Componer el dato a ser guardado en la base de datos
    const {
        place,
        station,
        turbidity,
        color,
        conductivity,
        PH,
        temperature
     } = req.body;  //Crea un elemento que venga desde el punto de mediciones
    const waterqObj = new WaterQ({
        place,
        station,
        turbidity,
        color,
        conductivity,
        PH,
        temperature
    })
    
//Post a la base de datos
await waterqObj.save();
res.json({status: "Dato Guardado exitosamente"})
});

//Actualizar datos desde el ID
router.put("/id/:id", async (req, res, next) => {
    //Toma los datos desde el body
    const {place, station, turbidity, color, conductivity, PH, temperature} =
    req.body; //Crea un objeto desde la info del body del req
const waterqObj = {
    place,
    station,
    turbidity,
    color,
    conductivity,   
    PH, 
    temperature,
};

await WaterQ.findByIdAndUpdate(req.params.id, waterqObj);
res.json({status: "Dato Actualizado Correctamente"});

});

//Borrar datos de la base de datos
router.delete("/id/:id", async (req, res, next) => {
    const ID = req.params.id;
    res.json({status: "Dato Borrado correctamente"})
})

module.exports = router;