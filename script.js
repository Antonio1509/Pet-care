document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // 1. Clear any existing error message from a previous attempt
        const existingError = document.getElementById("loginErrorMessage");
        if (existingError) {
            existingError.remove();
        }

        // Helper function to dynamically render a stylish error message
        const showError = (message) => {
            const errorElement = document.createElement("p");
            errorElement.id = "loginErrorMessage";
            errorElement.textContent = message;
            
            // Injects the error message at the top of the form fields
            form.insertBefore(errorElement, form.firstChild);
        };

        // Check 1: Fallback Default Master Admin Credentials
        if (username === "admin" && password === "petcare123") {
            window.location.href = "./services.html";
            return;
        }

        // Check 2: Dynamic Local Storage Account Profiles
        const storedUserRaw = localStorage.getItem(username);
        
        if (storedUserRaw) {
            const parsedUser = JSON.parse(storedUserRaw);
            
            if (parsedUser.password === password) {
                window.location.href = "./services.html";
                return;
            }
        }

        // If both checks fail, trigger the UI error message instead of an alert
        showError("Invalid username or password. Please try again.");
    });
});