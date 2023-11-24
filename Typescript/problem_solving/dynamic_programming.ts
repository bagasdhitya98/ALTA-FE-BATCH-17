// FIBO DYNAMIC PROGRAMMING

function fiboDp(num: number) {
  if (num <= 1) {
    return num;
  }

  let fiboIMinSatu = 1;
  let fiboIMinDua = 0;
  let fiboI = -1;

  for (let i = 2; i <= num; i++) {
    fiboI = fiboIMinSatu + fiboIMinDua;
    console.log("fiboI : ", fiboI);
    fiboIMinDua = fiboIMinSatu;
    console.log("fiboIMinDua : ", fiboIMinDua);
    fiboIMinSatu = fiboI;
    console.log("fiboIMinSatu : ", fiboIMinSatu);
  }
  return fiboI;
}

// console.log(fiboDp(7)); // 0 1 1 2 3 5 8 13

// FIBO BOTTOM UP

function fiboBottomUp(num: number) {
  let memo: Array<number> = [];

  for (let i = 0; i <= num; i++) {
    if (i <= 1) {
      memo[i] = i;
    } else {
      memo[i] = memo[i - 1] + memo[i - 2];
    }
  }
  return memo[num];
}

console.log(fiboBottomUp(7)); // 0 1 1 2 3 5 8 13
