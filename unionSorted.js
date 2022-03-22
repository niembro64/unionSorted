const union = (arrLeft, arrRight) => {
  const counterLeft = [];
  const counterRight = [];
  const returnArr = [];
  const returnArrMod = [];
  for (let i = 0; i < 10; i++) {
    counterLeft[i] = counterRight[i] = returnArr[i] = 0;
  }

  for (let i = 0; i < arrLeft.length; i++) {
    counterLeft[arrLeft[i]] += 1;
  }
  for (let i = 0; i < arrRight.length; i++) {
    counterRight[arrRight[i]] += 1;
  }
  p(counterLeft);
  p(counterRight);

  for (let i = 0; i < returnArr.length; i++) {
    if (counterLeft[i] > counterRight[i]) {
      // returnArr[i] = counterRight[i];
      returnArr[i] = counterLeft[i];
    } else {
      // returnArr[i] = counterLeft[i];
      returnArr[i] = counterRight[i];
    }
  }
  for (let i = 0; i < returnArr.length; i++) {
    for (let j = 0; j < returnArr[i]; j++) {
      returnArrMod.push(i);
    }
  }
  return returnArrMod;
};

const p = (a) => {
  console.log(a);
};

// var left = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9];
// var right = [0, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 10];
var left = [0, 1, 2, 2, 2];
var right = [1, 1, 1, 4, 4];

console.log(union(left, right));
