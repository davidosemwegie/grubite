/*
The purpose for this file is to create helper functions that the proram will use to access api
*/
// export function test() {
//     console.log("the api function works")
// }
import axios from 'axios'

export function createRestaurantOwner(email, password) {
    console.log(`${email} and ${password}`)

    const data = {
        email,
        password
    }

    const url = "http://localhost:3001/user/signup"

    axios.post(url, {
        email,
        password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
