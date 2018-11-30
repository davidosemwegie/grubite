//imports that i need.
const connection = require('../databaseConnection');
const con = connection.getConnection()

const express = require('express')
const router = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');
const process = require('../../nodemon.json')

//list out all of the users
router.get('/', (req, res, next)=>{
    var query = "select * from RestaurantOwner"
    con.query(query, (err, rows, fields) => {
        res.json(rows)
    })
})

router.get('/getmaxid', (req, res) => {
    //get the max id
    var getMaxId = "select max(roid) as maxid from RestaurantOwner"
    var maxId;
    con.query(getMaxId, (err, rows, fields) => {
        res.json({
            maxId: rows[0].maxid
        })
    })

})

//Restaurant Owner Sign 
router.post('/createOwner', (req, res, next) => {
    
    //Add Owner to the Database. 
    var insertUserQuery = "insert into Restaurant (email, password, rName) values (?, ?, ?)"
    var email = req.body.email
    var password = req.body.password
    var restaurantName = req.body.restaurantName

    var checkQuery = 'select * from Restaurant where email = ?'

    con.query(checkQuery, [email], (error, rows, fields) => {
        if (error) {
            //if we get an error, log the error in the console
            return res.send(error)   
        } else if (rows.length > 0) {
            res.json({
                message: "A user with that email already exists!"
            })
        } else {
            con.query(insertUserQuery, [email, password, restaurantName], (error, rows, fields) => {
                if (error) {
                    //if we get an error, log the error in the console
                    return res.send(error)   
                } else {
                    return res.json({
                        rows
                    })
                } 
            })
        }
    })
})

router.post('/addRestaurant', (req, res) => {
    var restaurantName = req.body.restaurantName
    var stressAddress = req.body.stressAddress
    var province = req.body.province
    var city = req.body.city
    var postalCose = req.body.city

    //get the max id
    var getMaxId = "select max(roid) as maxid from RestaurantOwner"
    var maxId;
    con.query(getMaxId, (err, rows, fields) => {
        res.json({
            maxId: rows[0].maxid
        })
    })
})

//Logging in a user
router.post('/login', (req, res, next)=>{
    const email = req.body.email //grab the email from the header
    const password = req.body.password //grab the password from the header

    var query = "select roid, email, rName from Restaurant where email = ? and password = ?"
    con.query(query, [email, password], (error, result, field) => {
        if (error) {
            //if we get an error, log the error in the console
            return res.send(error)   
        } else {
            return res.json({
                result
            })
        }  
    })
})

//get a list of all the users
router.get('/all', (req, res) => {
    var query = "select * from Restaurant"

    con.query(query, (error, result)=> {
        if (error) {
            return res.send(error)
        } else {
            return res.json({
                data: result
            })
        }
    })
})


module.exports = router
