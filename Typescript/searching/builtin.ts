function builtinSearch(arr: Array<number>, target: number) {
  const result: number = arr.indexOf(target);
  return result;
}

const rand: number[] = [11, 90, 44, 50, 21, 77, 82];
console.log(builtinSearch(rand, 77));
