const form = document.getElementById("regForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    let valid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        nameInput.classList.add("error-border");
        nameInput.classList.remove("success-border");
        valid = false;
    } else {
        nameError.textContent = "";
        nameInput.classList.remove("error-border");
        nameInput.classList.add("success-border");
    }

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        emailInput.classList.add("error-border");
        emailInput.classList.remove("success-border");
        valid = false;
    } else if (!emailInput.value.includes("@")) {
        emailError.textContent = "Email must contain '@'.";
        emailInput.classList.add("error-border");
        emailInput.classList.remove("success-border");
        valid = false;
    } else {
        emailError.textContent = "";
        emailInput.classList.remove("error-border");
        emailInput.classList.add("success-border");
    }

    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        passwordInput.classList.add("error-border");
        passwordInput.classList.remove("success-border");
        valid = false;
    } else if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        passwordInput.classList.add("error-border");
        passwordInput.classList.remove("success-border");
        valid = false;
    } else {
        passwordError.textContent = "";
        passwordInput.classList.remove("error-border");
        passwordInput.classList.add("success-border");
    }

    
    if (valid) {
        console.log("Form Submitted Successfully!");
        alert("Form Submitted Successfully!");
    }
});
