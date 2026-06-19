function togglePassword(){

let password =
document.getElementById("password");

if(password.type==="password"){
password.type="text";
}
else{
password.type="password";
}
}

function toggleLoginPassword(){

let password =
document.getElementById("loginPassword");

if(password.type==="password"){
password.type="text";
}
else{
password.type="password";
}
}

function signup(){

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

let students =
JSON.parse(localStorage.getItem("students")) || [];

students.push({
name:name,
email:email,
password:password
});

localStorage.setItem(
"students",
JSON.stringify(students)
);

alert("Registration Successful");

window.location.href="login.html";
}

function login(){

let email =
document.getElementById("loginEmail").value;

let password =
document.getElementById("loginPassword").value;

let students =
JSON.parse(localStorage.getItem("students")) || [];

let user =
students.find(student =>
student.email===email &&
student.password===password
);

if(user){
alert("Login Successful");
window.location.href="dashboard.html";
}
else{
alert("Invalid Credentials");
}
}

function logout(){
window.location.href="login.html";
}