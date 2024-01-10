const firstOccurrence = (s: string, x: string): number => {
  const sLength = s.length;
  const xLength = x.length;

  for (let i = 0; i <= sLength - xLength; i++) {
    let match = true;
    for (let j = 0; j < xLength; j++) {
      if (x[j] !== "*" && s[i + j] !== x[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return i;
    }
  }

  return -1;
};

const s: string = "xabcdey";
const x: string = "ab*de";

const result: number = firstOccurrence(s, x);
console.log("The first match is at index", result);
