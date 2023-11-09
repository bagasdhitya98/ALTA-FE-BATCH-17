// --- STYLING OF TYPING ---

// CAMEL CASE : fullName, secondName -> untuk memberi nama pada variabel
// PASCAL CASE : FullName, SecondName -> untuk memberi nama pada function
// SNAKE CASE : full_name, second_name -> bisa juga untuk memberi nama pada variabel

// -- Var
// Case 1 : Hoisting
// numberVar = 10;
// var numberVar: number;
// console.log(numberVar);

// Case 2 : Reassign
// var stringAlphabet: string = "xyz";
// var stringAlphabet: string = "abc";
// console.log(stringAlphabet);

// Case 3 : Scope
// var numberX: number = 7;
// if (true) {
//   var numberX: number = 9;
// }
// console.log(numberX);

// -- Let
// Case 1 : Hoisting
// randomNumber = 17;
// let randomNumber: number;
// console.log(randomNumber); // --> akan error 'randomNumber' is declared here.

// Case 2 : Reassign
// let fruit: string = "mango";
// let fruit: string = "banana";
// console.log(fruit); // --> Cannot redeclare block-scoped variable 'fruit'

// Case 3 : Scope
// let age: number = 20;
// if (true) {
//   let age: number = 21;
// }
// console.log(age);

// -- Const
// Case 1 : Hoisting
// numberX = 10;
// const numberX: number;
// console.log(numberX);

// Case 2 : Reassign
// const key: number = 30
// key = 35
// console.log(key)

// Case 3 : Scope
// const key: number = 12345;
// if (true) {
//   const key: number = 6789;
// }
// console.log(key);

// --- TIPE DATA PRIMITIVE ---
let strVar: string = "Hello World";
let intVar: number = 123456;
let booleanVar: boolean = true;
let unVar: undefined = undefined;
let nullVar: null = null;

// --- STRING ---
let firstName: string = "John";
let secondName: string = "Doe";
let fullName = firstName + secondName;
// console.log(fullName);
// console.log("full name with spacing : ", firstName + " " + secondName);

// menghitung panjang sebuah karakter
const placeholder: string = "lorem ipsum";
// console.log("length of placeholder : ", placeholder.length);

// mengecek tipe data
let varNumber: number = 120;
let varString: string = "abcd";
let varBoolean: boolean = true;
// console.log(typeof varNumber);
// console.log(typeof varString);
// console.log(typeof varBoolean);

// menyisipkan number ke string
let age: number = 18;
// console.log(`Hello, my age is ${age}`);

// -- BOOLEAN
let condition_1: boolean = true;
let condition_2: boolean = false;
// console.log("kondisi 1 : ", condition_1);
// console.log("kondisi 2 : ", condition_2);

let compare_1 = 5 > 3;
let compare_2 = 10 < 20;
let compare_3 = 30 < 12;
// console.log(compare_1);
// console.log(compare_2);
// console.log(compare_3);
