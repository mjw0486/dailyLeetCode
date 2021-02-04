function findLHS(nums: number[]): number {
  let maxLength : number = 0;
  const numsMap = {};

  for (const num of nums) {
    numsMap[num] = numsMap[num] === undefined ? 1 : numsMap[num] + 1;
  }
  for (const num in numsMap) {
    let currentLength : number = 0;
    const prevNum : number = Number(num) - 1;
    const nextNum : number = Number(num) + 1;
    if (numsMap[prevNum]) {
      currentLength = numsMap[prevNum] + numsMap[num];
      maxLength = currentLength > maxLength ? currentLength : maxLength;
    }
    if (numsMap[nextNum]) {
      currentLength = numsMap[nextNum] + numsMap[num];
      maxLength = currentLength > maxLength ? currentLength : maxLength;
    }
  }
  return maxLength;
};