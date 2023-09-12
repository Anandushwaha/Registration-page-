.   function validateForm() {
            //  get the form elements by their ids from html file
            var name = document.getElementById("name");
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            var confirm_password = document.getElementById("confirm-password");
            var gender = document.getElementById("gender");
            var terms = document.getElementById("terms");

            // take the error elements by their ids
            var name_error = document.getElementById("name-error");
            var email_error = document.getElementById("email-error");
            var password_error = document.getElementById("password-error");
            var confirm_password_error = document.getElementById("confirm-password-error");

            // Initialize a variable to store the validation status
            var valid = true;

            // Hide all the error elements initially
            name_error.style.display = "none";
            email_error.style.display = "none";
            password_error.style.display = "none";
            confirm_password_error.style.display = "none";

            // Validate the name input using a regular expression
            // The name should contain only alphabets and spaces and should be at least 3 characters long
            var name_regex = /^[A-Za-z ]{3,}$/;
            if (!name_regex.test(name.value)) {
                // If the name is invalid, show the error message and set the valid flag to false
                name_error.style.display = "block";
                valid = false;
            }

            // Validate the email input using a regular expression
            // The email should follow the standard format of username@domain
            var email_regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            if (!email_regex.test(email.value)) {
                // If the email is invalid, show the error message and set the valid flag to false
                email_error.style.display = "block";
                valid = false;
            }

            // Validate the password input using a regular expression
            // The password should contain at least one uppercase letter, one lowercase letter, one digit and one special character and should be at least 8 characters long
            var password_regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
            if (!password_regex.test(password.value)) {
                // If the password is invalid, show the error message and set the valid flag to false
                password_error.style.display = "block";
                valid = false;
            }

            // Validate the confirm password input by comparing it with the password input
            if (confirm_password.value != password.value) {
                // If the passwords do not match, show the error message and set the valid flag to false
                confirm_password_error.style.display = "block";
                valid = false;
            }

            // If the form is valid, hide the form element and show the success message element
            if (valid) {
                document.getElementById("register-form").style.display = "none";
                document.getElementById("success-message").style.display = "block";
            }

            // Return the validation status
            return valid;
        }

    
       