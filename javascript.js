document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle between login and signup forms
    function toggleForms(event) {
        event.preventDefault();
        const loginForm = document.querySelector('.loginform');
        const signupForm = document.querySelector('.signupform');

        // Add transition effect
        loginForm.classList.toggle('hidden');
        signupForm.classList.toggle('hidden');

        // Add a slight delay for transition effect
        setTimeout(() => {
            loginForm.classList.toggle('active');
            signupForm.classList.toggle('active');
        }, 300);
    }

    // Function for handling "Forgot Password" link
    function showForgotPassword() {
        // Placeholder function for forgot password link
        alert('Forgot Password functionality is not implemented yet.');
    }

    // Function to highlight input fields on focus
    function highlightInputOnFocus(event) {
        event.target.parentElement.classList.add('focused');
    }

    // Function to reset input field style on blur
    function resetInputStyleOnBlur(event) {
        event.target.parentElement.classList.remove('focused');
    }

    // Function to validate form input
    function validateInput(event) {
        const input = event.target;
        if (input.value.trim() === '') {
            input.style.borderColor = 'red'; // Highlight empty input with red
            showError(input, 'This field is required');
        } else {
            input.style.borderColor = '#12c2e9'; // Highlight valid input with blue
            hideError(input);
        }
    }

    // Function to show error messages
    function showError(input, message) {
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains('error')) {
            error = document.createElement('div');
            error.className = 'error';
            input.parentElement.appendChild(error);
        }
        error.textContent = message;
        error.style.color = 'red';
        error.style.fontSize = '12px';
    }

    // Function to hide error messages
    function hideError(input) {
        const error = input.nextElementSibling;
        if (error && error.classList.contains('error')) {
            error.textContent = '';
        }
    }

    // Function to handle form submission with validation
    function handleFormSubmission(event) {
        event.preventDefault();
        const form = event.target.closest('form');
        const inputs = form.querySelectorAll('.inputbox input');

        let valid = true;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                valid = false;
                input.style.borderColor = 'red';
                showError(input, 'This field is required');
            } else {
                input.style.borderColor = '#12c2e9';
                hideError(input);
            }
        });

        if (valid) {
            alert('Form submitted successfully!');
            // Here you would handle form submission, e.g., sending data to a server
        }
    }

    // Function to add smooth scroll behavior
    function addSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(event) {
                event.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // Function to add input field animations
    function addInputFieldAnimations() {
        const inputs = document.querySelectorAll('.inputbox input');
        inputs.forEach(input => {
            input.addEventListener('focus', highlightInputOnFocus);
            input.addEventListener('blur', resetInputStyleOnBlur);
        });
    }

    // Attach event listeners
    document.querySelectorAll('.text a').forEach(link => {
        link.addEventListener('click', toggleForms);
    });

    document.querySelector('.forgot-password a').addEventListener('click', showForgotPassword);

    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', handleFormSubmission);
    });

    // Initialize
    addSmoothScroll();
    addInputFieldAnimations();
});
