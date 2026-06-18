document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    if (!form) return;

    // NOTE: Do not auto-redirect here — allow users to enter credentials

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const normalizedUsername = username.toLowerCase();

        const existingError = document.getElementById("loginErrorMessage");
        if (existingError) {
            existingError.remove();
        }

        const showError = (message) => {
            const errorElement = document.createElement("p");
            errorElement.id = "loginErrorMessage";
            errorElement.textContent = message;
            errorElement.style.color = "#ff5f5f";
            errorElement.style.marginBottom = "1rem";
            errorElement.style.fontWeight = "600";
            form.insertBefore(errorElement, form.firstChild);
        };

        // Support a default demo/admin account and any registered users
        const DEFAULT_USERNAME = "admin";
        const DEFAULT_PASSWORD = "petcare123";

        const storedUserRaw = localStorage.getItem(normalizedUsername);
        // Check registered user
        if (storedUserRaw) {
            try {
                const parsedUser = JSON.parse(storedUserRaw);
                if (parsedUser && parsedUser.password === password) {
                    localStorage.setItem("loggedInUser", normalizedUsername);
                    window.location.href = "./services.html";
                    return;
                }
            } catch (error) {
                console.error("Failed to parse stored user data:", error);
            }
        }

        // Fallback: allow the default demo/admin credentials
        if (normalizedUsername === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
            localStorage.setItem("loggedInUser", normalizedUsername);
            window.location.href = "./services.html";
            return;
        }

        showError("Invalid username or password. Please try again.");
    });
});
