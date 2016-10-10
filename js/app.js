function generate() {
  var numbers = [];

  for(var i=0; i<6; i++) {
    numbers.push(Math.floor(Math.random() * 45) + 1);
  }

  return numbers;
}

