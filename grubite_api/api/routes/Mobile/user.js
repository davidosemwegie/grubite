//imports that i need.
const connection = require('../../databaseConnection');
const con = connection.getConnection()

const express = require('express')
const router = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;

/* MOBILE USER LOGIN */

router.post('/login', (req, res) => {
    const email = req.body.email
    // const username = req.body.username
    const password = req.body.password
    const query = "select * from User where email = ?"

    con.query(query, [email], (error, userInfo) => {
        if (error) {
            res.send(error)
        } else if (userInfo.length != 1) {
            return res.json({
                message: "Authentication Failed"
            })
        } else {
            bcrypt.compare(password, userInfo[0].password, function (err, result) {
                if (result) {
                    return res.json({
                        uid: userInfo[0].uid,
                        email: userInfo[0].email,
                        username: userInfo[0].username,
                        firstName: userInfo[0].firstName,
                        lastName: userInfo[0].lastName,
                    })
                } else {
                    return res.json({
                        message: "Authentication Failed"
                    })
                }
            });
        }
    })
})

/* MOBILE USER SIGN UP */

router.post('/signup', (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName

    const addUser = "insert into User (username, email, password, firstName, lastName) values (?, ?, ?, ?, ?)"
    const checkEmail = "select * from User where email = ?"
    const checkUsername = "select * from User where username = ?"

    //hash the password before it is added to the database.
    bcrypt.hash(password, saltRounds, function (err, hashedPassword) {
        //check if the user aleady exists in the database
        con.query(checkEmail, [email], (error, rows, fields) => {
            if (error) {
                //if we get an error, log the error in the console
                return res.send(error)
            } else if (rows.length > 0) {
                //if the query returns more than 0 results then that means that the user already exists. 
                res.json({
                    message: "A user with that email already exists!"
                })
            } else {
                //check to see if the user's username already exists in the database
                con.query(checkUsername, [username], (error, rows) => {
                    if (error) {
                        return res.send(error)
                    } else if (rows.length > 0) {
                        res.json({
                            message: "A user with that username already exists!"
                        })
                    } else {
                        //Add the user to the database. 
                        con.query(addUser, [username, email, hashedPassword, firstName, lastName], (error, rows, fields) => {
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
            }
        })
    });
})

/* SAVE A FOOD ITEM */
router.post('/save', (req, res) => {
    const uid = req.body.uid
    const foodId = req.body.foodId
    const query = "insert into Saved (uid, foodId) values (?,?)"

    con.query(query, [uid, foodId], (error, rows) => {
        if (error) {
            return res.send(error)
        } else {
            return res.json({
                rows
            })
        }
    })
})

/* GET FOOD ITEM (THIS METHOD ALSO CHECKS TO SEE IF THE FOOD ITEM HAS BEEN SAVED OR NOT) */
router.get('/menu/:roid/:uid', (req, res) => {
    uid = req.params.uid
    roid = req.params.roid
    const query = `select foodId, foodName, price, description,
    case when exists (select foodId from Saved where FoodItem.foodId = Saved.foodId and uid = ?) 
                        then 1
                        else 0
                        end as saved
    from FoodItem 
    where roid = ?;`

    con.query(query, [uid, roid], (error, rows) => {
        if (error) {
            return res.send(error)
        } else {
            return res.json({
                rows
            })
        }
    })
})

/* SEARCH MENU ITEMS WITH USER ID */
router.get('/menu/:roid/:uid/:value', (req, res) => {
    uid = req.params.uid
    roid = req.params.roid
    value = req.params.value
    const search = `%${value}%` 
    const query = `select foodId, foodName, price, description,
    case when exists (select foodId from Saved where FoodItem.foodId = Saved.foodId and uid = ?) 
                        then 1
                        else 0
                        end as saved
    from FoodItem 
    where roid = ? and foodName like ?;`

    con.query(query, [uid, roid, search], (error, rows) => {
        if (error) {
            return res.send(error)
        } else {
            return res.json({
                rows
            })
        }
    })
})

/* GET SAVED FOOD ITEMS FOR USER */
router.get('/saved/:uid', (req, res) => {
    const uid = req.params.uid

    const query = `select S.foodId, foodName, price, rName 
                    from Saved as S, FoodItem as F, Restaurant as R
                    where S.foodId = F.foodId and F.roid = R.roid and S.uid = ?`

    con.query(query, [uid], (error, rows) => {
        if (error) {
            return res.send(error)
        } else {
            return res.json({
                rows
            })
        }
    })
})

module.exports = router