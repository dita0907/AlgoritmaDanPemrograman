
function balikString() {
  const teks = document.getElementById("inputText").value || "";
  const hasil = teks.split("").reverse().join("");
  document.getElementById("output").innerText = "Hasil: " + hasil;
}
