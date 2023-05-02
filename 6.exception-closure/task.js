﻿function parseCount(number) {
  let parsingResult = Number.parseFloat(number);
  if (Number.isNaN(parsingResult)) {
    throw new Error ("Невалидное значение");
  }
  return parsingResult;
}
function validateCount(number) {
  try {
    return parseCount(number);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if ((a+b)<c||(b+c)<a||(c+a)<b) {
      throw new Error ("Треугольник с такими сторонами не существует");
    }
  }
    get perimeter() {
      return (this.a + this.b + this.c);
    }
    get area() {
      let p = this.perimeter*0.5;
      let s = (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
      return Number(s);
    }
  }
  function getTriangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
      try {
        return new Triangle(a, b, c);
    } catch(error){
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        }
    }
  }
  }
  
