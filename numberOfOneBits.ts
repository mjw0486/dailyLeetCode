function hammingWeight(n: number): number {
  let result = 0;
  let current = 1;
  for (let i = 0; i < 32; i += 1) {
    if (n & current) {
      result++;
    }
    current <<= 1;
  }
  return result;
};