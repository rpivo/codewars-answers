const closeCompare = (a, b, margin) => {
  if (!margin) margin = 0;
  if (a > b) return (a - b) > margin ? 1 : 0;
  if (b > a) return (b - a) > margin ? -1 : 0;
  return 0;
};

a = -3;
b = 5;
margin = 3;

console.log(closeCompare(a, b, margin));