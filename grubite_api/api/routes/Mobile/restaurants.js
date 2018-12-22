//imports that i need.
const connection = require('../../databaseConnection');
const con = connection.getConnection()

const express = require('express')
const router = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/', (req, res) => {
    var query = "select * from Restaurant as R, RestaurantInfo as RI where R.roid = RI.roid"

    con.query(query, (error, rows) => {
        if (error) {
            res.send(error)
        } else {
            res.json(rows)
        }
    })
})

router.get('/:value', (req, res) => {
    const value = req.params.value

    var query = "select * from Restaurant as R, RestaurantInfo as RI where R.roid = RI.roid and rName like ?"
    const search = `%${value}%`

    con.query(query, [search], (error, rows) => {
        if (error) {
            res.send(error)
        } else {
            res.json(rows)
        }
    })
})

module.exports = router