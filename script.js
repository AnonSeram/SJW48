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

// Form listener
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const subscribe = document.getElementById('subscribe').checked;

  // Validasi form
  if (!email || !message) {
    Swal.fire({
      title: 'Oops!',
      text: 'Please fill in all the required fields.',
      icon: 'error'
    });
    return;
  }

  // Konfirmasi pengiriman form
  Swal.fire({
    title: 'Are you sure?',
    text: 'You want to submit the form?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, submit it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Submitted!',
        text: `You ${subscribe ? 'have' : 'have not'} subscribed to the newsletter.`,
        icon: 'success'
      });

      // Lanjutkan dengan Logika penanganan formulir
      console.log('Email:', email);
      console.log('Message:', message);
      console.log('Subscribe:', subscribe);

      // Reset form
      form.reset();
    } else {
      // Jika dibatalkan, kembalikan checkbox ke status awal
      document.getElementById('subscribe').checked = subscribe;
    }
  });
});

emailjs.init("dfj4H774zyjlpFZeH"); // Ganti "YOUR_USER_ID" dengan User ID dari EmailJS

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.send("service_2hnvftm", "template_esetnpo", {
    from_name: document.getElementById("nama").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(function(response) {
    alert("Pesan berhasil dikirim!");
  }, function(error) {
    alert("Gagal mengirim pesan. Silakan coba lagi.");
  });
});