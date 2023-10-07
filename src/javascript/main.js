const USERS = new Map();

USERS.set("jting@bu.edu", "password");



function testAlert() {
    alert("This is a TEST. DO NOT PANIC!!!");
}

function getEmailPwd() {
    let email = document.getElementsByName("email")[0].value;
    let password = document.getElementsByName("psw")[0].value;
    return [email, password];
}

function signUp() {
    let [email, password] = getEmailPwd();
    let msg = `Email: ${email}\nPassword: ${password}`;
    if (USERS.has(email)) {
        alert("This email is already associated with an account.");
        return;
    }
    alert(msg);
//     alert("Sign Up Successful!");
}

function login() {
    let email, password = getEmailPwd();
    if (!USERS.has(email)) {
        alert("This email is not associated with an account.");
        return;
    }
    console.log(email);
}