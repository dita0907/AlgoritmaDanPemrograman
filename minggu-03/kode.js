
let queue = [];

function ambilAntrian() {
  let nama = document.getElementById("inputNama").value.trim();
  if (nama === "") {
    alert("Silakan masukkan nama dulu 😊");
    return;
  }

  queue.push(nama);
  tampilkanDaftar();
  alert("🎟 " + nama + " berhasil masuk antrian!");
  document.getElementById("inputNama").value = "";
}

function panggilAntrian() {
  if (queue.length > 0) {
    let sekarang = queue.shift();
    document.getElementById("namaSekarang").innerText = sekarang;
    document.getElementById("statusPanggilan").innerText = 
      "📢 Sedang dipanggil: " + sekarang;
    tampilkanDaftar();
  } else {
    alert("Tidak ada antrian! 😢");
  }
}

function tampilkanDaftar() {
  let list = document.getElementById("listAntrian");
  list.innerHTML = "";
  queue.forEach((nama, index) => {
    let li = document.createElement("li");
    li.innerText = (index+1) + ". " + nama;
    list.appendChild(li);
  });
}