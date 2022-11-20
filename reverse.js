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

//////////////////////////////////
// Solution by Andrei 🤓

function reverse1(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm that is not good';
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);

  return backwards.join('');
}

function reverse2(str) {
  return str.split('').reverse().join('');
}

const reverse3 = (str) => str.split('').reverse().join('');

const reverse4 = (str) => [...str].reverse().join('');

console.log(reverse3('Hi My name is Andrei'));
