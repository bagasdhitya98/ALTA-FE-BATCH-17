// --- LINEAR SEARCH

// --- pakai konsep looping atau perulangan
// --- mencari mulai dari element pertama sampai target ditemukan/elemen terakhir
// --- return index jika target ditemukan
// --- return -1 jika target tidak ditemukan

function linearSearch(arr: Array<number>, target: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const randomArray = [21, 10, 8, 51, 42, 88, 70];
console.log(linearSearch(randomArray, 10));
console.log(linearSearch(randomArray, 9));
