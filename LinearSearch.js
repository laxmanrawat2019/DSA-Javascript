const users = [
    { username: "Laxman", Email: "laxman@gmail.com" },
    { username: "Vikrant", Email: "vikrant@gmail.com" },
    { username: "Praveen", Email: "praveen@gmail.com" },
    { username: "Ankita", Email: "ankita@gmail.com" }
]

function isUserExit(array, value) {
    for (let items of array) {
        if (items['username'] === value) {
            return true;
        }
    }
    return false;
}

const result = isUserExit(users, "Ankita");
console.log(result);
