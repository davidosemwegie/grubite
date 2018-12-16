const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'GrubiteDB',
    port: 3306  
})

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: '35.203.40.163',
//     user: 'root',
//     password: 'grubtheclouddb',
//     database: 'GrubiteDB'  
// })


module.exports = {
    getConnection: function() {
        return pool
    }
}

//module.exports = getConnection
