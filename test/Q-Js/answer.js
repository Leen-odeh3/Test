function findMissingNumber(nums) {
  const n = nums.length;
  
  let expectedXOR = 0;
  
  for (let i = 0; i <= n; i++) {
    expectedXOR ^= i;
  }
  
  let actualXOR = 0;
  for (const num of nums) {
    actualXOR ^= num;
  }
  
  return expectedXOR ^ actualXOR;
}


console.log(findMissingNumber([3, 0, 1])); // Output: 2
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8
console.log(findMissingNumber([0, 1])); // Output: 2
