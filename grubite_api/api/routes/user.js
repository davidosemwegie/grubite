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
//Loging in a user
router.post('/login', (req, res, next)=>{
    const email = req.body.email //grab the email from the header
    const password = req.body.password //grab the password from the header

    var user = null; //sets the user object to null

    var query = "select roid, email from RestaurantOwner where email = ? and password = ?"
    con.query(query, [email, password], (error, result, field) => {
        if (error) {
            //if we get an error, log the error in the console
            console.log("error ocurred",error)
            return res.status(401).json({
                message: "Authenication Failed"
            })
        } else if (result) {
            //if the query returns only 1 item then set the user object to the object that was returned.
            //user = res.json(result)
            // return res.status(200).json({
            //     message: "Auth Success"
            // })

            //JWT method to sign in the user
            //const token = jwt.sign({email: result}, process.env.JWT_KEY,{expiresIn:  "1h"});
 
            //return res.json(result)
            // return res.status(200).json({
            //     result: result,
            //     token: token
            // })

            return res.json({
                result
            })
        }  
    })
})

// router.get('/getResturantData', (req, res) => {
//     const s
// })

module.exports = router
