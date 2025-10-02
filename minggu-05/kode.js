// function cariPeringkat() {
//   let input = document.getElementById("nilaiInput").value;
//   if (input.trim() === "") {
//     alert("Silakan masukkan nilai terlebih dahulu!");
//     return;
//   }

  
//   let arr = input.split(",").map(Number);

//   let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;

  
//   for (let num of arr) {
//     if (num > max1) {
//       max3 = max2;
//       max2 = max1;
//       max1 = num;
//     } else if (num > max2) {
//       max3 = max2;
//       max2 = num;
//     } else if (num > max3) {
//       max3 = num;
//     }
//   }


//   let hasilDiv = document.getElementById("hasil");
//   hasilDiv.innerHTML = `
//     <h3>3 Nilai Terbesar:</h3>
//     <ol>
//       <li>Peringkat 1: ${max1}</li>
//       <li>Peringkat 2: ${max2}</li>
//       <li>Peringkat 3: ${max3}</li>
//     </ol>
//   `;
// }
let daftarProduk = [
  { barcode: 1008, produk: 'Sabun Lifebuoy Total 10' },
  { barcode: 1015, produk: 'Shampo Pantene Anti Dandruff' },
  { barcode: 1023, produk: 'Sikat Gigi Pepsodent' },
  { barcode: 1045, produk: 'Pasta Gigi Colgate MaxFresh' },
  { barcode: 1061, produk: 'Kecap Manis Bango 275ml' },
  { barcode: 1078, produk: 'Saus Sambal ABC' },
  { barcode: 1092, produk: 'Minyak Goreng Sania 2L' },
  { barcode: 1113, produk: 'Teh Celup Sariwangi' },
  { barcode: 1124, produk: 'Kopi Kapal Api Special' },
  { barcode: 1139, produk: 'Gula Pasir Gulaku 1kg' },
  { barcode: 1156, produk: 'Tepung Terigu Segitiga Biru' },
  { barcode: 1177, produk: 'Mie Instan Indomie Goreng' },
  { barcode: 1198, produk: 'Biskuit Roma Kelapa' },
  { barcode: 1219, produk: 'Snack Twisko Jagung Bakar' },
  { barcode: 1234, produk: 'Wafer Tango Cokelat' },
  { barcode: 1251, produk: 'Susu UHT Ultra Milk Cokelat' },
  { barcode: 1266, produk: 'Yogurt Cimory Strawberry' },
  { barcode: 1282, produk: 'Jus Buavita Jambu' },
  { barcode: 1305, produk: 'Air Mineral Aqua 600ml' },
  { barcode: 1321, produk: 'Deterjen Rinso Anti Noda' },
  { barcode: 1344, produk: 'Pewangi Molto Pure' },
  { barcode: 1367, produk: 'Pembersih Lantai Super Pell' },
  { barcode: 1388, produk: 'Sabun Cuci Piring Sunlight' },
  { barcode: 1409, produk: 'Obat Nyamuk Baygon' },
  { barcode: 1423, produk: 'Baterai ABC Alkaline AA' },
  { barcode: 1447, produk: 'Deodoran Rexona Men' },
  { barcode: 1468, produk: 'Parfum Axe Cokelat' },
  { barcode: 1489, produk: 'Sabun Muka Garnier Men' },
  { barcode: 1512, produk: 'Hand Sanitizer Antis' },
  { barcode: 1533, produk: 'Tisu Wajah Paseo' },
  { barcode: 1555, produk: 'Popok Bayi MamyPoko' },
  { barcode: 1578, produk: 'Beras Sania 5kg' },
  { barcode: 1599, produk: 'Telur Ayam Negeri (per kg)' },
  { barcode: 1621, produk: 'Roti Tawar Sari Roti' },
  { barcode: 1645, produk: 'Selai Cokelat Nutella' },
  { barcode: 1666, produk: 'Keju Kraft Cheddar' },
  { barcode: 1687, produk: 'Sarden ABC Tomat' },
  { barcode: 1708, produk: 'Kornet Sapi Pronas' },
  { barcode: 1729, produk: 'Bubur Bayi Sun Pisang' },
  { barcode: 1751, produk: 'Pembalut Charm Body Fit' },
  { barcode: 1774, produk: 'Cokelat SilverQueen' },
  { barcode: 1798, produk: 'Permen Kiss Mint' },
  { barcode: 1823, produk: 'Keripik Kentang Chitato' },
  { barcode: 1845, produk: 'Minuman Soda Coca-Cola' },
  { barcode: 1867, produk: 'Sirup Marjan Cocopandan' },
  { barcode: 1888, produk: 'Es Krim Walls Magnum' },
  { barcode: 1910, produk: 'Sereal Koko Krunch' },
  { barcode: 1932, produk: 'Mentega Blue Band' },
  { barcode: 1956, produk: 'Sambal Terasi Uleg' },
  { barcode: 1999, produk: 'Kopi Sachet Nescafe Classic' }
];

function linearSearch(barcode) {
  let steps = "";
  for (let i = 0; i < daftarProduk.length; i++) {
    steps += `Membandingkan dengan barcode ${daftarProduk[i].barcode}\n`;
    if (daftarProduk[i].barcode === barcode) {
      steps += `✅ Ditemukan: ${daftarProduk[i].produk}\n`;
      return steps;
    }
  }
  steps += "❌ Produk tidak ditemukan.\n";
  return steps;
}

function binarySearch(barcode) {
  let steps = "";
  let low = 0;
  let high = daftarProduk.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    steps += `Membandingkan dengan barcode ${daftarProduk[mid].barcode}\n`;

    if (daftarProduk[mid].barcode === barcode) {
      steps += `✅ Ditemukan: ${daftarProduk[mid].produk}\n`;
      return steps;
    } else if (daftarProduk[mid].barcode < barcode) {
      steps += "➡ Cari di sebelah kanan\n";
      low = mid + 1;
    } else {
      steps += "⬅ Cari di sebelah kiri\n";
      high = mid - 1;
    }
  }
  steps += "❌ Produk tidak ditemukan.\n";
  return steps;
}

function cariProduk() {
  let barcode = parseInt(document.getElementById("barcodeInput").value);
  document.getElementById("linearOutput").textContent = linearSearch(barcode);
  document.getElementById("binaryOutput").textContent = binarySearch(barcode);
}
