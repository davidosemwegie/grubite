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

//route that gets a list of the sub categories in that menu category
router.get('/getSubCategories/:roid/:mcid/', (req, res, next) => {
    const roid = req.params.roid
    const mcid = req.params.mcid

    const query = "select * from SubCategory where roid = ? and mcid = ?"

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

//this route is going to get food Items in a particlar sub category
router.get('/getMenuItems/:roid/:mcid/:subCategoryId', (req, res, next) => {
    const roid = req.params.roid
    const mcid = req.params.mcid
    const subCategoryId = req.params.subCategoryId

    const query = "select * from FoodItem where roid = ? and mcid = ? and subCategoryId = ?"
    
    con.query(query, [roid, mcid, subCategoryId], (error, rows, fields) => {
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

router.get('/search/:roid/:value', (req, res, next) => {
    const roid = req.params.roid
    const value = req.params.value

    let query = ""

    if (value === null || value === "") {
        query = "select * from FoodItem where roid = ?"

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
    } else {
        query = "select * from FoodItem where roid = ? and foodName like ? "

        const search = `%${value}%` 

        con.query(query, [roid, search], (error, rows, fields) => {
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

module.exports = router