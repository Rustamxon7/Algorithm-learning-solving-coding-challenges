// [0,2]


const twoSum = (nums, target) => {
  let map = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;

    if (map[diff] !== undefined) {
      result.push(map[diff], i);
    }

    map[num] = i;
  }

  return result;

};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));

  