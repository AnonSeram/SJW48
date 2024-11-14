// Mengelola dropdown agar terbuka saat di-hover dan tertutup saat kursor keluar
const dropdownHover = document.getElementById("dropdownHover");
const dropdownMenu = document.getElementById("dropdownMenu");

// Tampilkan dropdown saat kursor diarahkan
dropdownHover .addEventListener("mouseover", function () {
    dropdownMenu.classList.add("show");
});

// Sembunyikan dropdown saat kursor keluar
dropdownHover.addEventListener("mouseleave", function () {
    dropdownMenu.classList.remove("show");
});

emailjs.init("dfj4H774zyjlpFZeH"); // Ganti "YOUR_USER_ID" dengan User ID dari EmailJS

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Send email with form data
  emailjs.send("service_2hnvftm", "template_esetnpo", {
    from_name: document.getElementById("nama").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(function(response) {
    // Show success message with SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Pesan Berhasil Dikirim!',
      text: 'Kami telah menerima pesan Anda.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById("contact-form").reset(); // Reset form fields
      }
    });

  }, function(error) {
    // Show error message with SweetAlert2
    Swal.fire({
      icon: 'error',
      title: 'Pesan Gagal Diwaro!',
      text: 'Silakan coba lagi nanti.',
      confirmButtonColor: '#d33',
      confirmButtonText: 'OK'
    });
  });
});

