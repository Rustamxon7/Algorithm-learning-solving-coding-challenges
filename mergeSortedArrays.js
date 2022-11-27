// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// [0, 3, 4, 4, 6, 30, 31]

///////////////////////////
// My Solution 😎

const mergeSortedArrays = (array1, array2) => {
  if (array1 && array2 == 0) {
    return 'it looks like you are merging empty arrays :)';
  }

  // add two arrays
  let array = [];

  for (let i = 0; i < array1.length; i++) {
    array.push(array1[i]);
  }

  for (let j = 0; j < array2.length; j++) {
    array.push(array2[j]);
  }

  return array.sort((a, b) => a - b);
};

const mergeArrYaYeas = (err1, err2) => [...err1, ...err2];

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// console.log(mergeArrYaYeas([0, 3, 4, 31], [4, 6, 30]));
