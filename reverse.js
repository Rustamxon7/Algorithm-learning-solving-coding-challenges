//////////////////////////////////
// My approach 😎

function getItems(array) {
  let count = [];
  for (let i = 0; i < array.length; i++) {
    count += array[i];
  }
  return count;
}

function reverse(str) {
  let array = [];

  for (let i = 0; i < str.length; i++) {
    array.unshift(str[i]);
  }

  return getItems(array);
}
