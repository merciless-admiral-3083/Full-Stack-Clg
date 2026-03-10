const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const strengthBar = document.getElementById("strengthBar");
const togglePassword = document.getElementById("togglePassword");

// REGEX
const nameRegex = /^[A-Za-z ]{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;


// NAME VALIDATION
nameInput.addEventListener("input", () => {

if(!nameRegex.test(nameInput.value)){
document.getElementById("nameError").textContent="Invalid name";
}else{
document.getElementById("nameError").textContent="";
}

});


// EMAIL VALIDATION
emailInput.addEventListener("input", () => {

if(!emailRegex.test(emailInput.value)){
document.getElementById("emailError").textContent="Invalid email";
}else{
document.getElementById("emailError").textContent="";
}

});


// PHONE VALIDATION
phoneInput.addEventListener("input", () => {

if(!phoneRegex.test(phoneInput.value)){
document.getElementById("phoneError").textContent="Enter 10 digit phone";
}else{
document.getElementById("phoneError").textContent="";
}

});


// PASSWORD STRENGTH
passwordInput.addEventListener("input", () => {

let password = passwordInput.value;
let strength = 0;

if(password.length >= 6) strength++;
if(/[A-Z]/.test(password)) strength++;
if(/[0-9]/.test(password)) strength++;
if(/[^A-Za-z0-9]/.test(password)) strength++;

let width = strength * 25;
strengthBar.style.width = width + "%";

if(strength <=1){
strengthBar.style.background="red";
}
else if(strength ==2){
strengthBar.style.background="orange";
}
else if(strength ==3){
strengthBar.style.background="yellowgreen";
}
else{
strengthBar.style.background="green";
}

});


// SHOW HIDE PASSWORD
togglePassword.addEventListener("click", () => {

if(passwordInput.type === "password"){
passwordInput.type = "text";
togglePassword.textContent = "Hide";
}else{
passwordInput.type = "password";
togglePassword.textContent = "Show";
}

});


// FORM SUBMIT
form.addEventListener("submit", (e)=>{

e.preventDefault();

let user = {
name: nameInput.value,
email: emailInput.value,
phone: phoneInput.value,
password: passwordInput.value
};

let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

submissions.push(user);

localStorage.setItem("submissions", JSON.stringify(submissions));

alert("Registration Saved!");

form.reset();
strengthBar.style.width="0%";

});