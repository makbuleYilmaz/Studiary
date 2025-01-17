document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form-container');
    const registerForm = document.querySelector('.register-form-container');

    const showLoginLink = document.getElementById('show-login');
    const showRegisterLink = document.getElementById('show-register');

    // Register formunu göster
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    });

    // Login formunu göster
    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    });
});
