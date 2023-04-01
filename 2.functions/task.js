function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((min, max) => min + max);
  let avg = sum / arr.length;
  avg = avg.toFixed(2);
  avg = Number(avg);
  return {
    min: min,
    max: max,
    avg: avg
  };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.reduce((a, b) => a + b);
    return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let difference = (max - min);
    return difference;
} 

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement = (sumEvenElement + arr[i]);
    } else {
      sumOddElement = (sumOddElement + arr[i]);
    }
  }
    let result = (sumEvenElement - sumOddElement);
    return result;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement = (sumEvenElement + arr[i]);
      countEvenElement = (countEvenElement + 1);
    }
  }
  let result = sumEvenElement/countEvenElement;
  return result;
}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  if (arrOfArr.length === 0){
    return 0;
  }
  for (let i = 0; i < arrOfArr.length; i++) {
    const element = func(...arrOfArr[i]);
    if (element > maxWorkerResult) {
      maxWorkerResult = element;
    }
    }
  return maxWorkerResult;
}