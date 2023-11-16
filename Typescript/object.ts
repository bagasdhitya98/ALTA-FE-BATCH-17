// --- OBJECT ---

// -- gunakan salah satu untuk mendefinisikan tipe data Object
// let pet: Object = {}
// let pet: {} = {}

// --- mengakses sebuah key di dalam object

type VehicleType = {
  type: string;
  wheels: number;
  color: string;
};

let vehicle: VehicleType = {
  type: "truck",
  wheels: 16,
  color: "yellow",
};

// console.log("OBJECT : ", vehicle);
// console.log("type of vehicle : ", vehicle.type);
// console.log("wheels of vehicle : ", vehicle.wheels);
// console.log("color of vehicle : ", vehicle.color);

// -- tanda ? merupakan simbol jika properties tidak wajib diisi/opsional
type DeviceType = {
  id: number;
  type: string;
  name: string;
  processor?: string;
};

let device: DeviceType = {
  id: 1,
  type: "Laptop",
  name: "Macbook Pro",
};

// -- menambahkan sebuah properties di dalam object
type UserType = {
  name: string;
  favoriteProgramming: string;
  experience: number;
  address?: string;
};

let user: UserType = {
  name: "John Doe",
  favoriteProgramming: "TypeScript",
  experience: 4,
};

// console.log("before : ", user);
// user["address"] = "Jalan Maju Mundur";
// console.log("after : ", user);

// --- mengupdate value di dalam object
type SmartphoneType = {
  type: string;
  merk: string;
  processor: string;
  product: string;
};

let smartphone: SmartphoneType = {
  type: "Smartphone",
  merk: "Find X",
  processor: "Snapdragon",
  product: "Oppo",
};

// smartphone["merk"] = "V21";
// smartphone["product"] = "Vivo";
// console.log(smartphone);

// --- menghapus value di dalam object
// -- disclaimer -> yang bisa dihapus hanya properties yang diberi tanda ?
type FruitType = {
  color: string;
  name: string;
  price?: number;
};

let fruit: FruitType = {
  name: "Banana",
  color: "Yellow",
  price: 20000,
};

// delete fruit.price;
// console.log(fruit);

// --- NESTED OBJECT

type PersonType = {
  name: string;
  title: string;
  address: {
    street: string;
    zip_code: number;
  };
  hobbies: Array<string>;
};

let person: PersonType = {
  name: "John Doe",
  title: "Software Engineer",
  address: {
    street: "Jalan Maju Mundur",
    zip_code: 123456,
  },
  hobbies: [
    "Exploring a new technology",
    "Singing on karaoke",
    "Fishing at lake",
  ],
};

// --- Mengakses nested object
// console.log(person.address.zip_code);
// console.log(person.hobbies[2]);

// -- CLONING OBJECT
type LaptopType = {
  merk: string;
  name: string;
  year: number;
};

let laptop: LaptopType = {
  merk: "Apple",
  name: "Macbook Pro",
  year: 2021,
};

let dupe1 = Object.assign({}, laptop); // -> copy pakai object assign
let dupe2 = { ...laptop }; // -> copy pakai spread operator
let dupe3 = JSON.parse(JSON.stringify(laptop)); // -> copy menggunakan JSON method (efektif untuk melakukan deep copy)
