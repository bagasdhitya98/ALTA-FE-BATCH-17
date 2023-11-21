// --- CALLBACK ---
// -- kondisi dimana sebuah function yang dipanggil setelah melakukan sebuah proses
// -- dalam kata lain, dipanggil setelah sebuah proses berjalan

// -- Contoh 1 --

function buyer(message: string, price: number): void {
  console.log("Pesan martabak dong? " + message + " : " + price);
}

function seller(callback: (message: string, price: number) => void): void {
  console.log("Pesan martabak lagi dong? ... (wait sedang dimasak ya bang)");
  setTimeout(() => {
    callback("OK, martabak sudah selesai kaka, harganya segini ya ", 25000);
  }, 3000);
}

// seller(buyer);

// -- Contoh 2 --
function driver(callback: (message: string) => void) {
  console.log("Titik sudah sesuai maps ya, Kak?");
  console.log("Pesanan sudah sesuai aplikasi ya, Kak?");
  callback("Pesanan sudah sesuai aplikasi ya, Kak?");
}

function customer(message: string) {
  if (message === "Pesanan sudah sesuai aplikasi ya, Kak?") {
    console.log("Pesanan sudah sesuai, Kak");
  }

  setTimeout(() => {
    console.log("Sudah pak. Terima kasih ya");
  }, 3000);
  setTimeout(() => {
    console.log("Tes");
  }, 2000);
}

driver(customer);
