function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((min, max) => min + max);
  let avg = sum / arr.length;
  avg = avg.toFixed(2);
  avg = Number(avg);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length > 0) {
let sum = arr.reduce((a, b) => a+b);
return sum;
}
else {
  return 0;
}
}

function differenceMaxMinWorker(...arr) {
  if (arr.length > 0) {
let max = Math.max(...arr);
let min = Math.min(...arr);
difference = (max - min);
return difference;
  }
  else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;
let result = (sumEvenElement - sumOddElement);
if (arr.length > 0) {
for (let i = 0; i < arr.length; i++) {
  if (i % 2 == 0) {
    sumEvenElement == (sumEvenElement + i);
  }
  else {
    sumOddElement == (sumOddElement + i);
  }
}
return result;
}
else {
  return 0;
}
}

function averageEvenElementsWorker(...arr) {
let sumEvenElement = 0;
let countEvenElement = 0;
let result = (sumEvenElement / countEvenElement);
if (arr.length > 0) {
for (let i = 0; i < arr.length; i++) {
  if (i % 2 == 0) {
    sumEvenElement == (sumEvenElement + i) && countEvenElement == (countEvenElement + 1);
  }
  else {
    sumEvenElement == sumEvenElement && countEvenElement == countEvenElement;
  }
}
return result;
}
else {
  return 0;
}
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
arrOfArr = [...arr];
for (let i=0; i<arrOfArr.length; i++) {
  
  const element = func(...arrOfArr[i]);
  if (element > maxWorkerResult) {
    maxWorkerResult = element;
  } 
}
return maxWorkerResult;
}
