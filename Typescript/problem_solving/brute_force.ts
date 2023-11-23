// --- BRUTE FORCE ---
// --- algoritma yang bekerja dengan mencoba berbagai macam kemungkinan/probabilitas dalam menyelesaikan suatu masalah

// --- CASE 1

function isPrime(num: number): boolean {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function bruteForcePrime(max: number) {
  const prime: Array<number> = [];
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  return prime;
}

// console.log(bruteForcePrime(20));

// --- CASE 2

function bruteForceDuplicate(arr: Array<string>) {
  const duplicate: Array<string> = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicate.includes(arr[i])) {
        duplicate.push(arr[i]);
      }
    }
  }
  return duplicate;
}

const listOfFruits: Array<string> = [
  "apple",
  "apple",
  "banana",
  "strawberry",
  "blueberry",
  "blueberry",
];
console.log(bruteForceDuplicate(listOfFruits));
