const rutasExpress = require("express").Router();

const empleadoscontroller = require("../controllers/empleadoscontroller");


rutasExpress.get("/",empleadoscontroller.getAllEmpleados)

module.exports = rutasExpress;