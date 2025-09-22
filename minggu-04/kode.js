
// // let queue = [];

// // function ambilAntrian() {
// //   let nama = document.getElementById("inputNama").value.trim();
// //   if (nama === "") {
// //     alert("Silakan masukkan nama dulu 😊");
// //     return;
// //   }

// //   queue.push(nama);
// //   tampilkanDaftar();
// //   alert("🎟 " + nama + " berhasil masuk antrian!");
// //   document.getElementById("inputNama").value = "";
// // }

// // function panggilAntrian() {
// //   if (queue.length > 0) {
// //     let sekarang = queue.shift();
// //     document.getElementById("namaSekarang").innerText = sekarang;
// //     document.getElementById("statusPanggilan").innerText = 
// //       "📢 Sedang dipanggil: " + sekarang;
// //     tampilkanDaftar();
// //   } else {
// //     alert("Tidak ada antrian! 😢");
// //   }
// // }

// // function tampilkanDaftar() {
// //   let list = document.getElementById("listAntrian");
// //   list.innerHTML = "";
// //   queue.forEach((nama, index) => {
// //     let li = document.createElement("li");
// //     li.innerText = (index+1) + ". " + nama;
// //     list.appendChild(li);
// //   });
// // }

// import java.util.Scanner;

// public class LinearSearchBuku {
//     public static void main(String[] args) {
        
//         String[] buku = {
//             "Algoritma dan Struktur Data",
//             "Dasar Pemrograman",
//             "Sistem Informasi",
//             "Pemrograman Web",
//             "Basis Data"
//         };

//         Scanner scanner = new Scanner(System.in);

//         System.out.print("Masukkan judul buku yang dicari: ");
//         String cari = scanner.nextLine().trim();

//         boolean ditemukan = false;
//         for (int i = 0; i < buku.length; i++) {
//             if (buku[i].equalsIgnoreCase(cari)) { 
//                 System.out.println("Buku \"" + buku[i] + "\" ditemukan pada indeks " + i + ".");
//                 ditemukan = true;
//                 break;
//             }
//         }

//         if (!ditemukan) {
//             System.out.println("Buku \"" + cari + "\" tidak ditemukan dalam daftar.");
//         }

//         scanner.close();
//     }
// }


let buku = ["Laskar Pelangi", "Bumi Manusia", "Negeri 5 Menara", "Ayat-Ayat Cinta", "Ronggeng Dukuh Paruk"];


let target = prompt("Masukkan judul buku yang dicari:");


let ditemukan = false;

for (let i = 0; i < buku.length; i++) {
    if (buku[i].toLowerCase() === target.toLowerCase()) { 
        ditemukan = true;
        break; 
    }
}


if (ditemukan) {
    alert(`Buku "${target}" ditemukan di dalam daftar.`);
} else {
    alert(`Buku "${target}" tidak ditemukan di dalam daftar.`);
}
