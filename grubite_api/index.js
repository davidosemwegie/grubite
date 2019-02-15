//Needed Packages
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mysql = require('mysql')


app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('short'))

/*Creating the connection to SQL database with a pool to make sure that there are
not too many connections to the database at the same time.
*/


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'GrubiteDB',
    port: 3306 
})

function getConnection() {
    return pool
}

app.get('/', (req, res)=>{
    const query = "select * from RestaurantOwner"
    
    getConnection().query(query, (err, result, fields)=>{
        if (err) {
            console.log("Failed to insert new user" + err)
            res.sendStatus(500)
            return
        }
        res.send(result)
    })
})

app.post('/create_restaurant_owner', (req, res) => {
    console.log("trying to create a new user")

    const email = req.body.email
    const password = req.body.password

    const query = 'insert into RestaurantOwner (email, password) values (?, ?)'

    getConnection().query(query, [email, password], (err, results, fields) => {
        if (err) {
            console.log("Failed to insert new user" + err)
            res.sendStatus(500)
            return
        }

        console.log('Inserted a new user with id: ', results.insertId)
        res.end()
    })
})

const PORT = process.env.PORT || 3001

//set port
app.listen(PORT, () => {
    console.log(`Now the server is up and listening on port ${PORT}...`)
})