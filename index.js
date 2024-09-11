document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
    const showPasswordCheck = document.querySelector("#showPasswordCheck");
    const rememberMeCheck = document.querySelector("#rememberMe"); // Remember Me checkbox
    const loginForm = document.querySelector("#loginForm");
    const loadingSpinner = document.querySelector("#loadingSpinner");

    // Check if there's a saved username/email in localStorage and auto-fill it
    const savedUsername = localStorage.getItem("savedUsername");
    if (savedUsername) {
        usernameInput.value = savedUsername;
        rememberMeCheck.checked = true; // If saved, check the "Remember Me" box
    }

    // Toggle password visibility using the checkbox
    showPasswordCheck.addEventListener("change", () => {
        passwordInput.type = showPasswordCheck.checked ? "text" : "password";
    });

    // Handle form submission
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get input values
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        // Clear previous error messages
        document.querySelectorAll(".error-message").forEach(el => el.textContent = '');

        // Validate inputs
        let isValid = true;

        if (!username || !/^[\w-]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(username)) {
            showError("username", "Please enter a valid email.");
            isValid = false;
        }

        if (!password || password.length < 6) {
            showError("password", "Password must be at least 6 characters long.");
            isValid = false;
        }

        if (!isValid) return; // Exit if validation fails

        // Show loading spinner
        loadingSpinner.style.display = "block";

        try {
            // Send API request
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                // Handle successful login
                const result = await response.json();
                alert("Login successful!");

                // Check if "Remember Me" is checked and save username/email
                if (rememberMeCheck.checked) {
                    localStorage.setItem("savedUsername", username);
                } else {
                    localStorage.removeItem("savedUsername"); // Clear saved data if unchecked
                }
            } else {
                // Handle failed login
                alert("Login failed. Please try again.");
            }
        } catch (error) {
            // Handle any errors
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        } finally {
            // Hide loading spinner
            loadingSpinner.style.display = "none";
        }
    });

    // Display error message for specific fields
    function showError(fieldId, message) {
        const errorElement = document.querySelector(`#${fieldId}Error`);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }
});
