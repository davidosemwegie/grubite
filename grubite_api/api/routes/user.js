const connection = require('../databaseConnection');
const con = connection.getConnection()

const express = require('express')
const router = express.Router();


router.get('/', (req, res, next)=>{
    var query = "select * from RestaurantOwner"
    con.query(query, (err, rows, fields) => {
        res.json(rows)
    })
})

router.post('/login', (req, res, next)=>{
    const email = req.body.email
    var query = "select * from RestaurantOwner where email = ?"
    con.query(query, [email], (error, result, field) => {
        if (error) {
            console.log("error ocurred",error)
        } else if (result.length > 0) {
            return res.json(result)
        } else if (result.length < 1) {
            return res.json({
                message: "The email does not exists"
            })
        }
    })
})

module.exports = router
