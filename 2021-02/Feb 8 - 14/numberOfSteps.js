/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  let totalSteps = 0;
  while (num) {
    console.log(num);
    totalSteps += 1;
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num -= 1;
    }
  }
  return totalSteps;
};