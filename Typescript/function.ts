// CASE 1 : Menentukan tarif parkir berdasarkan kendaraan

const golonganMotor: number = 1000;
const golonganMobil: number = 5000;
const golonganBus: number = 15000;
const golonganTruk: number = 20000;

// -- IF
// if (golonganMotor > 2000) {
//   console.log("Kemahalan Coy");
// }
// if (golonganMotor == 2000) {
//   console.log("Harga normal");
// }
// if (golonganMotor < 2000) {
//   console.log("Terlalu murah");
// }

// -- FUNCTION
function sumNumber(): number {
  const numberX: number = 10;
  const numberY: number = 20;
  const sum: number = numberX + numberY;
  return sum;
}

// sumNumber(); // --> cara memanggil function
// console.log(sumNumber()); // --> untuk mencetak nilai balikan dari function sumNumber()
// console.log(sumNumber() + 5);

// -- Function with Parameters
function sumNumberWithParams(numberX: number, numberY: number): number {
  const sum = numberX + numberY;
  return sum;
}

// disclaimer :
// -- penulisan argumen Wajib berurutan dengan urutan parameter
// -- misalkan, ada function sumNumberWithParams(x,y)
// -- berarti argumen harus urut dengan x dan y juga

// console.log(sumNumberWithParams(10, 20));
// console.log(sumNumberWithParams(30, 50));

// -- FUNCTION (IF)
function checkParkingNumber(price: number): void {
  if (price == 2000) {
    console.log("Harga Parkir Motor");
  }
  if (price >= 2000 && price <= 5000) {
    console.log("Harga Parkir Mobil");
  }
  if (price > 5000) {
    console.log("Harga Parkir Bus/Truk");
  }
}

// checkParkingNumber(4000);
// checkParkingNumber(1000); --> tidak akan dicetak, karena tidak diberi kondisi

// -- FUNCTION (IF ELSE)
// -- rules : jika persyaratan if pertaama tidak dipenuhi, maka akan langsung terlempar ke else

function checkNumber(num: number): string {
  if (num % 2 == 0) {
    return "Bilangan Genap";
  } else {
    return "Bilangan Ganjil";
  }
}

// console.log(checkNumber(7));
// console.log(checkNumber(42));

// -- FUNCTION (ELSE IF)
// -- rules : - jika persyaratan if pertama tidak dipenuhi, maka akan dilempar ke else if
//            - jika persyaratan else if tidak dipenuhi, maka akan dilempar ke else

function checkHour(hour: number): string {
  if (hour < 12) {
    return "Halo, Selamat Pagi";
  } else if (hour >= 12 && hour < 15) {
    return "Halo, Selamat Siang";
  } else if (hour >= 15 && hour <= 18) {
    return "Halo, Selamat Sore";
  } else if (hour > 18 && hour <= 24) {
    return "Halo, Selamat Malam";
  } else {
    return "Jam tidak terdefinisi";
  }
}

// console.log(checkHour(15));
// console.log(checkHour(12));
// console.log(checkHour(18.5));
// console.log(checkHour(25));

// -- FUNCTION (NESTED IF)
// -- rules : jika persyaratan if pertama tidak dipenuhi, maka akan langsung dilempar ke else

const v1: number = 400;
const v2: number = 700;

function checkVNumber(inputA: number, inputB: number) {
  if (inputA === v1) {
    if (inputB === v2) {
      return "Nilai dari v1 adalah 400 dan v2 adalah 700";
    } else {
      return "Nilai dari input B tidak valid";
    }
  } else {
    return "Nilai dari input A tidak valid";
  }
}

// console.log(checkVNumber(400, 800));
// console.log(checkVNumber(500, 700));
// console.log(checkVNumber(400, 700));

// -- TERNARY OPERATOR
// -> tanda "?" artinya IF
// -> tanda ":" artinya ELSE

function checkAge(age: number): string {
  const canDrive = age > 17 ? "Boleh Menyetir" : "Tidak Boleh Menyetir";
  return canDrive;
}

// console.log(checkAge(17));
// console.log(checkAge(20));

function checkTemperature(temp: number): string {
  const result =
    temp > 36
      ? "Kamu masih aman"
      : `${temp > 32 && temp <= 36 ? "Kamu normal" : "Kamu kedinginan"}`;
  return result;
}

// console.log(checkTemperature(33));
// console.log(checkTemperature(20));

// -- SWITCH CASE

function checkTrafficLight(signal: string): void {
  switch (signal) {
    case "red":
      console.log("Berhenti");
      break;
    case "orange":
      console.log("Siap - siap");
      break;
    case "green":
      console.log("Jalan");
      break;
    default:
      console.log("Lampunya rusak");
      break;
  }
}

// checkTrafficLight("blue");
// checkTrafficLight("orange");
checkTrafficLight("yellow");
