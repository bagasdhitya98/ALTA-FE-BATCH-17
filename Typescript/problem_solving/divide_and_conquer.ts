// --- DIVIDE AND CONQUER ---
// -- bekerja dengan memecah masalah besar menjadi sub-masalah yang lebih kecil, kemudian diselesaikan secara rekursif
// -- lalu menggabungkannya solusi sub-masalah untuk memperoleh solusi masalah besar

// -- CASE 1 : QUICK SORT

function quickSort(arr: Array<number>): Array<number> {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left: Array<number> = [];
  let right: Array<number> = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
      console.log("left : ", left);
    } else {
      right.push(arr[i]);
      console.log("right : ", right);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const randomArr = [20, 5, 8, 1, 3, 9, 6, 17, 12];
console.log(quickSort(randomArr));
