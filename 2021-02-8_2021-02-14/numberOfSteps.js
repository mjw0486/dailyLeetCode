/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  let currentStep = num;
  let totalSteps = 0;
  while (currentStep) {
    console.log(currentStep);
    totalSteps += 1;
    if (currentStep % 2 === 0) {
      currentStep = currentStep / 2;
    } else {
      currentStep -= 1;
    }
  }
  return totalSteps;
};