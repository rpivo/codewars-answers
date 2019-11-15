function periodIsLate(last, today, cycleLength) {
  return ((((cycleLength * 24) * 60) * 60) * 1000) >= (today - last) ? false : true;
}

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28));

// console.log(((((cycleLength * 24) * 60) * 60) * 1000));
// console.log(today - last);