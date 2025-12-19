// Welcome Name
let userName = prompt("Masukkan nama kamu:");
if (userName) {
  document.getElementById("userName").innerText = userName;
}

// Message Us
document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let birth = document.getElementById("birth").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let message = document.getElementById("messageText").value;

  document.getElementById("resultContent").innerHTML = `
    <p><b>Nama:</b> ${name}</p>
    <p><b>Tanggal Lahir:</b> ${birth}</p>
    <p><b>Jenis Kelamin:</b> ${gender}</p>
    <p><b>Pesan:</b> ${message}</p>
  `;
});