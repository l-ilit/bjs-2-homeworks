function parseCount(number) {
  this.number = number;
  if (Number.parseFloat == NaN) {
    throw new Error ("Невалидное значение");
  }
  return Number.parseFloat(number);
}
function validateCount(number) {
  try {
    parseCount(number);
  } catch (e){
    console.error("Невалидное значение");
  }
  return parseCount(number);
}

class Triangle {
  constructor (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  triangleRule() {
    if ((a+b)<c||(b+c)<a||(c+a)<b) {
    throw new Error ("Треугольник с такими сторонами не существует");
    }
  }
    get perimeter() {
      return (this.a + this.b + this.c);
    }
    get area() {
      let p = this.perimeter*0.5;
      return (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)))
    }
  }
  function getTriangle(a, b, c) {
    try {
      let triangle = new Triangle();
    } catch(e){
      console.error("Треугольник не сущетсвует");
    }
  }
