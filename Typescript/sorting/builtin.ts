function builtinSort(arr: Array<number>) {
  const result = arr.sort((first, last) => {
    // return first - last; // --> untuk mengurutkan element terkecil ke terbesar
    return last - first; // --> untuk mengurutkaan element terbesar ke terkecil
  });
  return result;
}

console.log(builtinSort([22, 11, 56, 10, 23, 9, 7, 50, 20, 88, 61]));
