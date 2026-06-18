document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (password !== confirmPassword) {
            alert("Passwords do not match! Please try again.");
            return;
        }

        if (username.toLowerCase() === "admin") {
            alert("This username is reserved. Please pick another one.");
            return;
        }

        const userCredentials = {
            fullname: fullname,
            email: email,
            username: username,
            password: password
        };

        localStorage.setItem(username, JSON.stringify(userCredentials));

        alert("Registration Successful! Redirecting you to login.");
        window.location.href = "./login.html";
    });
});