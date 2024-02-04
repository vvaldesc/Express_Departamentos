const services = require("../services/empleadosservices");


const getAllEmpleados = async (req,res) => { 
    const allEmpleados = await services.getAllEmpleados();
    res.json(allEmpleados);
 };


 module.exports = {getAllEmpleados};