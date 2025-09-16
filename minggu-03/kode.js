
let antrian = [];

const tampilkan = () => {
  let list = document.getElementById('antrian');
  list.innerHTML = '';
  antrian.forEach((p, i) => {
    let kelas = (i % 2 === 0) ? 'ganjil' : 'genap';
    if (i === 0) kelas = 'aktif'; // yang paling depan jadi special
    list.innerHTML += `<li class="${kelas}">💌 ${i + 1}. ${p}</li>`;
  });
};

function tambah() {
  let n = nama.value.trim();
  if (!n) return alert('😿 Nama tidak boleh kosong!');
  antrian.push(n);
  nama.value = '';
  tampilkan();
}

function panggil() {
  if (!antrian.length) return alert('✨ Antrian kosong! ✨');
  alert('📢 Panggil: ' + antrian.shift() + ' 💖');
  tampilkan();
}



