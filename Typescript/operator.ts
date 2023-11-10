const numberOne: number = 10;
const numberTwo: number = 20;

const add: number = numberOne + numberTwo;
const sub: number = numberOne - numberTwo;
const mul: number = numberOne * numberTwo;
const div: number = numberTwo / numberOne;
const mod: number = numberOne % numberTwo;

// console.log(add);
// console.log(sub);
// console.log(mul);
// console.log(div);
// console.log(mod);

// --- INCREMENT & DECREMENT
let numA: number = 10;
let numB: number = 10;

// console.log(++numA);
// ++numA = 10 + 1
// console.log(--numB);
// --numB = 10 - 1

// typescript bisa menggunakan 2 atau lebih tipe data untuk mendeklarasikan sebuah data
const total: string = "100" + 100;
// console.log(total);

// --- REASSIGNMENT

// = -> reassignment (memberikan nilai pada suatu variabel)
// == -> membandingkan antara kedua valuenya aja
// === -> membandingkan antara kedua value beserta tipe datanya

const temp: string = "30";
const condition1: boolean = temp == "30";
const condition2: boolean = temp === "30";
const condition3: boolean = temp != "30";
const condition4: boolean = temp !== "30";

// console.log(condition1);
// console.log(condition2);
// console.log(condition3);
// console.log(condition4);

// --- GERBANG LOGIKA

// -- AND (&&)
// false + false = false
// false + true = false
// true + false = false
// true + true = true

// -- OR (||)
// false + false = false
// false + true = true
// true + false = true
// true + true = true

const statement_1: boolean = 30 < 33;
const statement_2: boolean = 20 > 18;
const statement_3: boolean = 50 < 48;
const statement_4: boolean = 40 > 39;
const statement_5: boolean = 12 > 17;

// console.log(statement_1 && statement_2);
// console.log(statement_1 && statement_4);
// console.log(statement_3 && statement_1);

// console.log(statement_5 || statement_2);
// console.log(statement_3 || statement_5);
// console.log(statement_2 || statement_1);

// --- SHORTHAND ARITHMETIC
let numbVar: number = 20;

numbVar += 20; // numbVar = numbVar + 20
numbVar -= 20; // numbVar = numbVar - 20
numbVar *= 20; // numbVar = numbVar * 20
numbVar /= 20; // numbVar = numbVar / 20
numbVar %= 20; // numbVar = numbVar % 20
