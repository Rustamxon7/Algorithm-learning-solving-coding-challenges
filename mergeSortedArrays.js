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

///////////////////////////
// Solution by Andrei 🤓

function mergeSortedArrays1(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // Check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays1([0, 3, 4, 31], [4, 6, 30]));
