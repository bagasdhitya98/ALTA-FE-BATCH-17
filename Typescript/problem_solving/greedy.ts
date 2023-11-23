// --- GREEDY ALGORITHM ---
// -- greedy bekerja dengan cara membuat kemungkinan, lalu memilih kemungkinan/probabilitas yang paling optimal

type Coins = {
  coins: number[];
  target: number;
};

function findMinimumCoins(item: Coins) {
  const sortedCoins = item.coins.sort((a, b) => b - a);
  const result = [];
  let remainValue = item.target;

  for (let coin of sortedCoins) {
    while (remainValue >= coin) {
      result.push(coin);
      remainValue = remainValue - coin;
    }
  }
  return result;
}

const objective: Coins = {
  coins: [1, 10, 15, 25],
  target: 42,
};

console.log(findMinimumCoins(objective));
