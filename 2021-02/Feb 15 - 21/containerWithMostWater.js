var maxArea = function(height) {
  let maxVolume = 0;
  let left = 0;
  let right = height.length - 1;

  while (left !== right) {
    let min = Math.min(height[left], height[right]);
    if (maxVolume < min * (right - left)) {
      maxVolume = min * (right - left);
    }
    if (height[left] <= height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return maxVolume;
};