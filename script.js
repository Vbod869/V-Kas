document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah pengguna sudah login
    if (!sessionStorage.getItem('loggedIn')) {
        window.location.href = 'login.html'; // Redirect ke halaman login jika belum login
    }

    const form = document.getElementById('kasForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nama = document.getElementById('nama').value.trim();
        const tanggal = document.getElementById('tanggal').value; // Ambil tanggal
        const masuk = parseFloat(document.getElementById('masuk').value) || 0;
        const keluar = parseFloat(document.getElementById('keluar').value) || 0;
        const saldo = masuk - keluar;

        // Validasi input
        if (!nama) {
            alert('Nama tidak boleh kosong.');
            return;
        }
        
        if (!tanggal) {
            alert('Tanggal tidak boleh kosong.');
            return;
        }

        // Mendapatkan elemen tabel
        const tableBody = document.getElementById('kasTable').getElementsByTagName('tbody')[0];

        // Menambahkan baris baru ke tabel
        const row = tableBody.insertRow();

        row.insertCell().textContent = nama;
        row.insertCell().textContent = tanggal; // Tambahkan tanggal ke sel
        row.insertCell().textContent = masuk.toFixed(0);
        row.insertCell().textContent = keluar.toFixed(0);
        row.insertCell().textContent = saldo.toFixed(0);

        // Tampilkan notifikasi data berhasil ditambahkan
        const dataNotification = document.getElementById('dataNotification');
        dataNotification.style.display = 'block';

        // Sembunyikan notifikasi setelah beberapa detik
        setTimeout(function() {
            dataNotification.style.display = 'none';
        }, 2000); // Delay 2 detik

        // Reset form
        form.reset();
    });

    // Logout button logic
    document.getElementById('logoutButton').addEventListener('click', function() {
        sessionStorage.removeItem('loggedIn'); // Hapus item 'loggedIn'
        
        // Show notification
        const notification = document.getElementById('notification');
        notification.style.display = 'block';

        // Redirect after a delay to allow the user to see the notification
        setTimeout(function() {
            window.location.href = 'login.html'; // Redirect ke halaman login
        }, 2000); // Delay 2 detik
    });

    

    // WebSocket or polling initialization
    // Replace with your WebSocket URL or server endpoint
});