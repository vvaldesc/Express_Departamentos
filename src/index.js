const express = require("express");
//const pool = require("./bd/bd")

const app = express();
//const bodyParser = require("body-parser");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Reemplaza con tu origen de React
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json())
//app.use(bodyParser.urlencoded({extended:true}))

const routes = require("./routes/empleadosroutes");
app.use("/deps", routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{ console.log("express escuchando en el puerto 👍 " + PORT)})