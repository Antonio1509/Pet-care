document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        const normalizedUsername = username.toLowerCase();

        if (password !== confirmPassword) {
            alert("Passwords do not match! Please try again.");
            return;
        }

        if (normalizedUsername === "admin") {
            alert("This username is reserved. Please pick another one.");
            return;
        }

        if (localStorage.getItem(normalizedUsername)) {
            alert("This username is already taken. Please choose another one.");
            return;
        }

        const userCredentials = {
            fullname: fullname,
            email: email,
            username: normalizedUsername,
            password: password
        };

        localStorage.setItem(normalizedUsername, JSON.stringify(userCredentials));
        // Automatically mark the user as logged in and go to services
        localStorage.setItem("loggedInUser", normalizedUsername);
        alert("Registration Successful! You are now logged in.");
        window.location.href = "./services.html";
    });
});