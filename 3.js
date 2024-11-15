function cetakPola(n) {
    let totalKarakter = n * 2 - 1; // Total karakter di baris pertama (paling atas)
  
    for (let i = 0; i < n; i++) {
      // Menambahkan spasi di awal setiap baris untuk membuat segitiga sama kaki
      let spasi = " ".repeat(i);
      
      // Membuat pola karakter `#` dan `+` untuk setiap baris
      let baris = "";
      for (let j = 0; j < totalKarakter - (i * 2); j++) {
        // Untuk baris pertama dan baris ke 2, tambahkan # dan + bergantian
        if (i === 0) {
          baris += (j % 2 === 0 ? "#" : "+");
        } else if (i % 2 === 0) {
          baris += (j === Math.floor((totalKarakter - (i * 2)) / 2) ? "#" : "+");
        } else {
          baris += "+";
        }
      }
  
      // Cetak baris dengan spasi awal
      console.log(spasi + baris);
    }
  }
  
  // Contoh penggunaan fungsi
  cetakPola(5);
  