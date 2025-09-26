function cariPeringkat() {
  let input = document.getElementById("nilaiInput").value;
  if (input.trim() === "") {
    alert("Silakan masukkan nilai terlebih dahulu!");
    return;
  }

  
  let arr = input.split(",").map(Number);

  let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;

  
  for (let num of arr) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }
  }


  let hasilDiv = document.getElementById("hasil");
  hasilDiv.innerHTML = `
    <h3>3 Nilai Terbesar:</h3>
    <ol>
      <li>Peringkat 1: ${max1}</li>
      <li>Peringkat 2: ${max2}</li>
      <li>Peringkat 3: ${max3}</li>
    </ol>
  `;
}