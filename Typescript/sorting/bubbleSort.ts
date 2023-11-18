// --- BUBBLE SORT

// -- cara kerja :
// -- menggunakan nested loop untuk membandingkan element pertama dan selanjutnya
// -- ketika element pertama lebih besar daripada element selanjutnya, maka akan dilakukan pertukaran nilai
// -- ketika element pertama lebih kecil daripada element selanjutnya, maka dilakukan pertukaran posisi element pertama

function bubbleSort(arr: Array<number>) {
  let len = arr.length;
  let dupe = [...arr]; // -> supaya tidak mempengaruh array aslinya

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (dupe[j] > dupe[j + 1]) {
        let varDupe = dupe[j];
        dupe[j] = dupe[j + 1];
        dupe[j + 1] = varDupe;
      }
    }
  }
  return dupe;
}

console.log(bubbleSort([22, 11, 56, 10, 23, 9, 7, 50, 20, 88, 61]));
