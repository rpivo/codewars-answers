Array.prototype.filter = function(comparator) {
  const arr = [];
  for (i = 0; i < this.length; i++) {
    if (comparator(this[i])) arr.push(this[i]);
  }
  console.log(arr);
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.filter(x => x === 'Apple');