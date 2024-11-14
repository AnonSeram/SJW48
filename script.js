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

(function(){
  emailjs.init("dfj4H774zyjlpFZeH"); // Ganti dengan Public Key EmailJS Anda
})();

document.getElementById("TalentForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah form submit secara default
  console.log('Form submitted'); // Log untuk memastikan form terpanggil

  emailjs.sendForm('service_826bwrz', 'template_iya9my5', this)
      .then(function(response) {
          console.log('Success:', response.status, response.text); // Log untuk sukses
          alert('Pesan kamu berhasil terkirim, terima kasih! Akan kami waro secepatnya!');
      }, function(error) {
          console.log('Failed:', error); // Log untuk error
          alert('Failed to send booking request. Please try again.');
      });
});
