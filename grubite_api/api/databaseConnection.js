const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'GrubiteDB',
    port: 3306  
})


module.exports = {
    getConnection: function() {
        return pool
    }
}

//module.exports = getConnection
