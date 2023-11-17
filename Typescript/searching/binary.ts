// --- BINARY SEARCH ---

// -- menggunakan array yang sudah disortir secara ascending (dari element terkecil ke terbesar)
// -- cara bekerja :
// -- pencarian dimulai dari nilai tengah
// -- jika, element tengah itu lebih kecil dari target, maka geser ke kanan
// == jika, element tengah itu lebih besar dari target, maka geser ke kiri
// -- jika, target ditemukan, maka kembalikan/return index atau posisi dari target yang ditemukan
// -- jika, target tidak ditemukan, maka return -1

function binarySearch(arr: Array<number>, target: number) {
  let first: number = 0;
  let last: number = arr.length - 1;

  while (first <= last) {
    let middle = Math.floor((first + last) / 2);
    if (arr[middle] == target) {
      return middle;
    } else if (arr[middle] < target) {
      first = middle + 1;
      return first;
    } else if (arr[middle] > target) {
      last = middle - 1;
      return last;
    } else {
      return -1;
    }
  }
}

const dupe = [1, 2, 3, 4, 5, 6, 7];
console.log(binarySearch(dupe, 5));
console.log(binarySearch(dupe, 4));
console.log(binarySearch(dupe, 8));
