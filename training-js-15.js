let arr = [3.1288, 3.1212, 3.1205];
let n = 3.1212;

function howManySmaller(arr,n){
  let count = 0;
  arr.forEach(item => {
    item = +item.toFixed(2);
    if (item < n) count++;
  });
  return console.log(count);
}

howManySmaller(arr, n);



