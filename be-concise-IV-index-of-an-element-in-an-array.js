const find = (arr, el) => arr.includes(el) ? arr.indexOf(el) : 'Not found';

const numbers = [1, 2, 3, 4, 5];
const elem = 3;

console.log(find(numbers, 3));