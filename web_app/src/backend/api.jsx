/*
The purpose for this file is to create helper functions that the proram will use to access api
*/
import axios from 'axios'
// import React from 'react'
// import {Redirect} from 'react-router-dom'

//This function is to be redirect the user ot the login page if they are not signed in 

export function checkLogin() {
    //window.sessionStorage.setItem('uid', "The the user has been set")
    const user = window.sessionStorage.getItem('uid')
    if (user === null) {
        return false
    } else {
        return true
    }
}

export function createRestaurantOwner(email, password, restaurantName, stressAddress, province, city, postalCode) {
    //setting the data that is going to be passed to the user
    const data = {
        email,
        password,
        restaurantName,
        stressAddress,
        province,
        city,
        postalCode
    }

    const url = "http://localhost:3001/user/signup"

    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(function (response) {
                console.log(response.data)
                resolve(response.data)
            })
            .catch(function (error) {
                reject(error)
        });
    })
}

export function login(email, password) {

    

    // return new Promise((resolve, reject) => {
    //     const data = {
    //         email,
    //         password
    //     }
    
    //     const url = "http://localhost:3001/user/login"
    
    //     var userData = []

    //     var errorData = {
    //         result: 0
    //     }
    
    
    //     axios.post(url, data)
    //             .then(function (response) {
    //                 var count = Object.keys(response.data.result).length
    //                 if (count < 1) {
    //                     resolve(errorData)
    //                 } else {
    //                     userData = response.data.result[0]
    //                     resolve(userData)
    //                 }
    //             })
    //             .catch(function (error) {
    //                 reject(error)
    //                 //Promise.reject(error)
    //         });
    // })
}

/**** RESTAURANT INFORMATION  ****/

export function restaurantInfo () {
    let info = {
        rid: 155
    };
    return info;
} 
