const longestCommonPrefix = (strs) => {
  let longestPrefix = '';
  if (strs.length === 0) return longestPrefix;

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) return longestPrefix;
    }

    longestPrefix += strs[0][i]
  }

  return longestPrefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['cir', 'car']));
console.log(longestCommonPrefix(['cir', 'car', 'car']));

