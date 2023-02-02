const checkDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

console.log(checkDuplicate([2, 4, 6, 8, 10]) === false);
console.log(checkDuplicate([2, 4, 6, 8, 2]) === true);
