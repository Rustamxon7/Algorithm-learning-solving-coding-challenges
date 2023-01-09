// Google Question
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// It should return 1

// Given an array = [2, 3, 4, 5]
// It should return undefined

let recursions = [];

const findRecursions = (array) => {
  for (let i = 0; i < array.length; i++) {
    // if (array[0] === array[i + 1] || array[0] !== array[0]) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        console.log(array[i]);
        return array[i];
      }
    }
    // }
  }
  return undefined;
};

findRecursions([2, 5, 1, 2, 3, 5, 1, 2, 4]);
