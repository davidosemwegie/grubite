//imports that i need.
const connection = require('../databaseConnection');
const con = connection.getConnection()

const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    const q = 'select * from FoodItem'

    con.query(q, (error, rows, fields) => {
        if (error) {
            //if we get an error, log the error in the console
            return res.send(error)   
        } else {
            return res.json({
                rows
            })
        } 
    })
})

//route that gets the all menu Items for one restaurant
router.get('/getMenuItems/:roid', (req, res, next) => {
    const roid = req.params.roid

    const query = "select * from FoodItem where roid = ?"
    
    con.query(query, [roid], (error, rows, fields) => {
        if (error) {
            //if we get an error, log the error in the console
            return res.send(error)   
        } else {
            return res.json({
                rows
            })
        } 
    })
})

//route that get the menu items for a particular menu category
router.get('/getMenuItems/:roid/:mcid', (req, res, next) => {
    const roid = req.params.roid
    const mcid = req.params.mcid

    const query = "select * from FoodItem where roid = ? and mcid = ?"
    
    con.query(query, [roid, mcid], (error, rows, fields) => {
        if (error) {
            //if we get an error, log the error in the console
            return res.send(error)   
        } else {
            return res.json({
                rows
            })
        } 
    })
})

module.exports = router