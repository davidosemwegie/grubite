const connection = require('../databaseConnection');

const express = require('express')
const router = express.Router();

router.get('/', (req, res, next)=>{
    const con = connection.getConnection()
    var query = "select * from RestaurantOwner"
    con.query(query, (err, rows, fields) => {
        console.log("I think we fetched user successfully")
        res.json(rows)
    })
})

module.exports = router