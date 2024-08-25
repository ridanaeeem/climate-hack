// function getUSERS() {
//     let USERS = localStorage.getItem("USERS");
//     if (USERS === null) {
//         USERS = new Map();
//         localStorage.setItem("USERS", USERS);
//     }
//     return USERS;
// }

function getEmailPwd() {
    let email = document.getElementsByName("email")[0].value;
    let password = document.getElementsByName("password")[0].value;
    return [email, password];
}

function getName() {
    return document.getElementsByName("name")[0].value;
}

function createNewUser(email, password) {
    let newUser = {};
    newUser.email = email;
    newUser.password = password;
    // newUser.name = getName();
    newUser.points = 0;
    return newUser;
}

function signUp() {
    let [email, password] = getEmailPwd();
    let USERS = getUSERS();
    if (!USERS || USERS.has(email)) {
        alert("This email is already associated with an account.");
        return;
    }
    console.log("email: " + email);
    localStorage.setItem("USERS", USERS);
    localStorage.setItem("currentUser", email);
    localStorage.setItem("currentPassword", password);
    localStorage.setItem("currentName", getName());
    localStorage.setItem("currentPoints", 0);
    alert("Account created successfully.")
    return;
}

function login() {
    let [email, password] = getEmailPwd();
    let USERS = getUSERS();
    if (!USERS.has(email)) {
        alert("This email is not associated with an account.");
        return;
    }
    if (!(USERS.get(email).password === password)) {
        alert("Incorrect password.");
        return;
    }
    localStorage.setItem("currentUser", email);
    localStorage.setItem("currentPassword", password);
    // localStorage.setItem("currentName", USERS.get(email).name);
    // localStorage.setItem("currentPoints", USERS.get(email).points);
    localStorage.setItem("currentName", "User");
    localStorage.setItem("currentPoints", 0);
    return;
}
