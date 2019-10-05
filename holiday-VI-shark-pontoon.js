function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin) sharkSpeed /= 2;
  if (pontoonDistance <= 0 && pontoonDistance < sharkDistance) return 'Alive!';
  if (sharkDistance <= 0 && sharkDistance < pontoonDistance) return 'Shark Bait!';
  while (pontoonDistance > 0 && sharkDistance > 0) {
    pontoonDistance -= youSpeed;
    sharkDistance -= sharkSpeed;
    if (pontoonDistance <= 0 && pontoonDistance < sharkDistance) return 'Alive!';
    if (sharkDistance <= 0 && sharkDistance < pontoonDistance) return 'Shark Bait!';
  }
}

console.log(shark(24, 0, 4, 8, true));