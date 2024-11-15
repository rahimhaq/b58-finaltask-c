function cetakPola(n) {
    let totalKarakter = n * 2 - 1; // Total karakter di baris pertama (paling atas)
  
    for (let i = 0; i < n; i++) {
      let spasi = " ".repeat(i);
      let baris = "";
      for (let j = 0; j < totalKarakter - (i * 2); j++) {
        if (i === 0) {
          baris += (j % 2 === 0 ? "#" : "+");
        } else if (i % 2 === 0) {
          baris += (j === Math.floor((totalKarakter - (i * 2)) / 2) ? "#" : "+");
        } else {
          baris += "+";
        }
      }
  
      console.log(spasi + baris);
    }
  }
  
  cetakPola(5);
  