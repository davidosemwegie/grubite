

export function checkIfLoggedIn() {
    if (sessionStorage.getItem("id") === null) {
        return false
    } else {
        return true
    }
}

