/* THIS IS FILE HOLD FUNCTIONS THAT I WILL USE AND ABUSE */

export const API_URL="http://localhost:3001"

export function checkIfLoggedIn() {
    if (sessionStorage.getItem("roid") === null) {
        return false
    } else {
        return true
    }
}


export function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
