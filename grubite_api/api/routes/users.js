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
router.post('/signup', (req, res, next) => {
    
    //Add Owner to the Database. 
    var query = "insert into RestaurantOwner (email, password) values (?, ?)"
    var email = req.body.email
    var password = req.body.password
    con.query(query, [email, password], (err, rows, fields) => {
        res.end
    })
    res.json({
        id: maxId,
        message: "User was addded successfully",
        success: true
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

    var query = "select roid, email, restaurantName from Restaurant where email = ? and password = ?"
    con.query(query, [email, password], (error, result, field) => {
        if (error) {
            //if we get an error, log the error in the console
            return res.send(err)   
        } else {
            return res.json({
                result
            })
        }  
    })
})

router.get('/', (req, res) => {
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
