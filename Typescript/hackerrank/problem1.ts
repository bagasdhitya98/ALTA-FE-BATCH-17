const countMaxEqual = (signalOne: number[], signalTwo: number[]): number => {
  let maxEqual: number = 0;
  const n: number = signalOne.length;
  const m: number = signalTwo.length;
  let updateCount: number = 0;

  let i = 0;
  let j = 0;

  while (i < n && j < m) {
    if (signalOne[i] === signalTwo[j]) {
      if (signalOne[i] > maxEqual) {
        maxEqual = signalOne[i];
        updateCount++;
      }
      i++;
      j++;
    } else if (signalOne[i] < signalTwo[j]) {
      i++;
    } else {
      j++;
    }
  }

  return updateCount;
};

const signalOne: number[] = [1, 2, 3, 3, 3, 5, 4];
const signalTwo: number[] = [1, 2, 3, 4, 3, 5, 4];

const maxEqualUpdates: number = countMaxEqual(signalOne, signalTwo);
console.log("maxEqual was updated a total of", maxEqualUpdates, "times.");
