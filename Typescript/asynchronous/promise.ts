// --- PROMISE ---
// -- sebuah object yang merepresentasikan sebuah kejadian yang bisa terpenuhi
// -- atau gagal, berdasarkan operasi async dan bisa menghasilkan sebuah output

function generateRandom() {
  return new Promise((resolve, reject) => {
    let gacha: number = Math.floor(Math.random() * 20);
    console.log("Gacha yang didapatkan : ", gacha);
    setTimeout(() => {
      if (gacha % 2 === 0) {
        resolve("Bilangan Genap");
      } else {
        reject("Bilangan Ganjil");
      }
    }, 3000);
  });
}

// generateRandom()
//   .then((response) => {
//     console.log(
//       "Hasil menunjukkan bahwa, ini merupakan bilangan genap : ",
//       response
//     );
//   })
//   .catch((error) => {
//     console.log(
//       "Hasil menunjukkan bahwa, ini merupakan bilangan ganjil : ",
//       error
//     );
//   })
//   .finally(() => {
//     console.log("------- GACHA SELESAI --------");
//   });

// --- AWAIT ---

async function playGacha() {
  //   await generateRandom()
  //     .then((response) => {
  //       console.log(
  //         "Hasil menunjukkan bahwa, ini merupakan bilangan genap : ",
  //         response
  //       );
  //     })
  //     .catch((error) => {
  //       console.log(
  //         "Hasil menunjukkan bahwa, ini merupakan bilangan ganjil : ",
  //         error
  //       );
  //     })
  //     .finally(() => {
  //       console.log("------- GACHA SELESAI --------");
  //     });

  try {
    const response = await generateRandom();
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("------- GACHA SELESAI --------");
  }
}

playGacha();
