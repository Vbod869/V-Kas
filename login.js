document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = passwordInput.value;

        // Cek kredensial (ini hanya contoh sederhana, untuk aplikasi nyata harus lebih aman)
        if (username === 'admin' && password === 'password') {
            showNotification('Login berhasil!', function() {
                // Redirect setelah notifikasi ditampilkan
                sessionStorage.setItem('loggedIn', true);
                setTimeout(function() {
                    window.location.href = 'index.html'; // Redirect ke halaman utama setelah login berhasil
                }, 1000); // Delay 1 detik sebelum redirect
            });
        } else {
            showNotification('Username atau password salah!');
        }
    });

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        // Toggle icon based on visibility
        this.classList.toggle('fa-eye', type === 'password');
        this.classList.toggle('fa-eye-slash', type === 'text');
    });

    function showNotification(message, callback) {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.classList.remove('hidden');
        notification.style.display = 'block';

        if (callback) {
            // Hide notification after a short delay and then call the callback function
            setTimeout(function() {
                notification.style.display = 'none';
                if (typeof callback === 'function') callback();
            }, 1000); // Delay 1 detik untuk menampilkan notifikasi
        }
    }
});