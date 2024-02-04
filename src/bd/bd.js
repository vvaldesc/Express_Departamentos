

const {createPool} = require("mysql2/promise")

const pool = createPool ({
    host: "localhost",
    database: "empleados",
    user: "root",
    password: "",
})

module.exports = pool