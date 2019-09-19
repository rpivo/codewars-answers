function numberToPower(number, power) {
  let value = power > 1 ? number : 1;
  for (index = power; index > 1; index--) {
    value = number * value;
  }
  return power === 1 ? number : value;
}

console.log(numberToPower(10, 0));