/*
The purpose for this file is to create helper functions that the proram will use to access api
*/
import axios from 'axios'

export function createRestaurantOwner(email, password) {
    //setting the data that is going to be passed to the user
    const data = {
        email,
        password
    }

    const url = "http://localhost:3001/user/signup"

    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(function (response) {
                resolve(response.data)
            })
            .catch(function (error) {
                reject(error)
        });
    })
}

export function login(email, password) {
    const data = {
        email,
        password
    }

    const url = "http://localhost:3001/user/login"

    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(function (response) {
                resolve(response.data)
            })
            .catch(function (error) {
                reject(error)
        });
    })
}
