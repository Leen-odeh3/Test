function findMissingNumber(nums) {
  const maxNumber = Math.max(...nums);
  const minNumber = Math.min(...nums);

  for (let i = minNumber; i <= maxNumber; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }

  return maxNumber + 1;
}

// Examples
const nums1 = [3, 0, 1];
console.log(findMissingNumber(nums1)); // Output: 2

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(findMissingNumber(nums2)); // Output: 8

const nums3 = [0, 1];
console.log(findMissingNumber(nums3)); // Output: 2

