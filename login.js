document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    if (!form) return;

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

        const storedUserRaw = localStorage.getItem(normalizedUsername);
        if (storedUserRaw) {
            try {
                const parsedUser = JSON.parse(storedUserRaw);
                if (parsedUser && parsedUser.password === password) {
                    window.location.href = "./services.html";
                    return;
                }
            } catch (error) {
                console.error("Failed to parse stored user data:", error);
            }
        }

        showError("Invalid username or password. Please try again.");
    });
});
