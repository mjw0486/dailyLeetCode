function shortestToChar(s: string, c: string): number[] {
  const distanceArray : number[] = [];
  const targetArray : number[] = [];

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === c) {
      targetArray.push(i);
    }
  }
  for (let i = 0; i < s.length; i += 1) {
    let minDistance = s.length;
    for (const targetIndex of targetArray) {
      let currDistance = Math.abs(targetIndex - i);
      if (minDistance > currDistance) {
        minDistance = currDistance;
      }
    }
    distanceArray.push(minDistance);
  }

  return distanceArray;
};