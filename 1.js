function hitungTotalUang() {
    // Modal awal
    const modalAwal = 1000000000; // 1 m
    console.log("Modal Awal : Rp " + modalAwal.toLocaleString("id-ID"));
  
    // Pembagian modal untuk setiap instrumen
    const deposito = 350000000; // 350 jt
    console.log("Deposito : Rp " + deposito.toLocaleString("ID-id"));
    const obligasi = 195000000; // 195 jt
    console.log("Obligasi : Rp " + obligasi.toLocaleString("ID-id"));
    const sahamA = 227500000; // 227,5 jt
    console.log("Saham A : Rp " + sahamA.toLocaleString("ID-id"));
    const sahamB = 227500000; // 227,5 jt
    console.log("Saham B : Rp " + sahamB.toLocaleString("ID-id"));
  
    // Persentase keuntungan per tahun
    const untungDeposito = 3.5 / 100; // 3,5%
    console.log("Persentase untung Deposito : " + untungDeposito.toLocaleString("id-ID"));

    const untungObligasi = 13 / 100; // 13%
    console.log("Persentase untung Obligasi : " + untungObligasi.toLocaleString("id-ID"));

    const untungSahamA = 14.5 / 100; // 14,5%
    console.log("Persentase untung Saham A : " + untungSahamA.toLocaleString("id-ID"));

    const untungSahamB = 12.5 / 100; // 12,5%
    console.log("Persentase untung Saham B : " + untungSahamB.toLocaleString("id-ID"));

    // hitung keuntungan untuk 2 tahun
    const keuntunganDeposito = deposito * untungDeposito * 2;
    console.log("Keuntungan Deposito (2thn): 350 jt x 3,5% x 2thn --> Rp " + keuntunganDeposito.toLocaleString("id-ID"));

    const keuntunganObligasi = obligasi * untungObligasi * 2;
    console.log("Keuntungan Obligasi (2thn): 195 jt x 13% x 2thn --> Rp " + keuntunganObligasi.toLocaleString("id-ID"));

    const keuntunganSahamA = sahamA * untungSahamA * 2;
    console.log("Keuntungan Saham A (2thn): 227,5 jt x 14,5% x 2thn --> Rp " + keuntunganSahamA.toLocaleString("id-ID"));

    const keuntunganSahamB = sahamB * untungSahamB * 2;
    console.log("Keuntungan Saham B (2thn): 227,5 jt x 12,5% x 2thn --> Rp " + keuntunganSahamB.toLocaleString("id-ID"));

    // jumlah keuntungan
    const totalKeuntungan = keuntunganDeposito + keuntunganObligasi + keuntunganSahamA + keuntunganSahamB;
    console.log("Total Keuntungan : Rp " + totalKeuntungan.toLocaleString("id-ID"));

    // jumlah uang setelah 2 tahun
    const totalUang = modalAwal + totalKeuntungan;

    console.log("Total uang investor setelah 2 tahun: Modal Awal + Total keuntungan ==> " + totalUang.toLocaleString("id-ID"));
}

hitungTotalUang();