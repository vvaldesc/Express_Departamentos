const pool = require("../bd/bd.js");

const getAllEmpleados = async() => {
    const allempleados = await pool.query("select * from departamentos");
    return allempleados[0];
}

module.exports = { getAllEmpleados };
