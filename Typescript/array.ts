// --- ARRAY ---

// --- Cara Mengakses Array ---
// -- bisa diakses pakai Array<> atau []

// let devices: string[] = [
//     //     "Smart Watch",
//     //     "Tablet",
//     //     "Handphone",
//     //     "Laptop",
//     //     "Headset",
//     //   ];

let devices: Array<string> = [
  "Smart Watch",
  "Tablet",
  "Handphone",
  "Laptop",
  "Headset",
];
let year: Array<number> = [2019, 2020, 2021, 2022];

// -- bisa pilih salah satu cara mendefinisikannya
let combine: Array<number | string> = ["Tablet", 2019, "Laptop", 2020];
// let combine: (string | number)[] = ["Tablet", 2019, "Laptop", 2020];

// console.log(devices[3]);
// console.log(combine[1]);
// console.log(typeof combine);
// console.log(typeof year);

combine[2] = "Headset";
year[3] = 1998;

// console.log(combine);
// console.log(year);

// --- menambahkan element dari belakang array ---
let fruits: Array<string> = ["Banana", "Orange", "Grape", "Mango", "Apple"];

// console.log("before added with push : ", fruits);
// fruits.push("Salak");
// console.log("after added with push : ", fruits);

// --- menghapus element dari belakang array ---

// console.log("before deleted with pop : ", fruits);
// fruits.pop();
// console.log("after deleted with pop : ", fruits);

// --- menambahkan element dari depan array ---

// console.log("before added with unshift : ", fruits);
// fruits.unshift("Blueberry");
// console.log("after added with unshift : ", fruits);

// --- menghapus element dari depan array ---

// console.log("before added with unshift : ", fruits);
// fruits.shift();
// console.log("after added with unshift : ", fruits);

// --- CLONE ARRAY
// -> copy array dapat menggunakan method slice() atau spread operator [...]

let colors: Array<string> = ["red", "magenta", "pink", "yellow", "green"];
let copyOfColors: Array<string> = colors.slice();

// copyOfColors.unshift("purple");
// console.log(colors); --> colors tidak akan terpengaruh efek unshift pada copyOfColors

// console.log("original data : ", colors);
// console.log("cloning data : ", copyOfColors);

// --- menggunakan spread operator [...] ---

let animals: Array<string> = ["Elephant", "Crocodille", "Hippo", "Tiger"];
let copyOfAnimals: Array<string> = [...animals];

// --- LOOPING ARRAY
let vehicles = ["Bus", "Motorbike", "Car", "Truck", "Plane"];

function loopingFirst(): void {
  for (let i = 0; i < vehicles.length; i++) {
    // console.log(i); // --> menghasilkan index
    // console.log(vehicles[i]); // --> menghasilkan element
  }
}

// for of --> untuk mengambil value dari index
function loopingSecond(): void {
  for (let key of vehicles) {
    console.log(key);
  }
}

// for in --> untuk mengambil index
function loopingThird(): void {
  for (let key in vehicles) {
    console.log(key);
  }
}
// loopingFirst();
// loopingSecond();
// loopingThird();

// --- looping with map method
let members = [
  {
    id: 1,
    name: "Upin",
  },
  {
    id: 2,
    name: "Ipin",
  },
  {
    id: 3,
    name: "Ehsan",
  },
];

members.map((item: any, index: number) => {
  //   console.log(item.name);
  //   console.log(item.id);
  //   console.log(index);
});
