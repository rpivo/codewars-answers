const arrayMadness = (a, b) => {
  const sumA = a.reduce((acc, curr) => acc + curr ** 2, 0);
  const sumB = b.reduce((acc, curr) => acc + curr ** 3, 0);
  console.log(sumA);
  console.log(sumB);
  return sumA > sumB ? true : false;
};

const arr1 = [5, 6, 7];
const arr2 = [4, 5, 6];

console.log(arrayMadness(arr1, arr2));