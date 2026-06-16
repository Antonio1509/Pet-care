document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const username = document
            .getElementById("username")
            .value
            .trim();

        const password = document
            .getElementById("password")
            .value
            .trim();

        if (username === "admin" && password === "petcare123") {

            alert("Login Successful!");

            window.location.href = "index.html";

        } else {

            alert("Invalid username or password");

        }

    });

});