function colorOf(r,g,b){
  const hex = [r, g, b].reduce((acc, cur) => {
    cur = cur.toString(16);
    if (cur.length === 1) cur = `0${cur}`;
    return acc + cur;
  }, '#');
  return hex;
}

const r = 255;
const g = 1;
const b = 0;

console.log(colorOf(r, g, b));