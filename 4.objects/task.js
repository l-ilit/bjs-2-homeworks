function Student(name, gender, age) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.marks = [];
}
const student1 = new Student("Василиса", "женский", 19);
const student2 = new Student("Артем", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    return this.marks.push(...marksToAdd);
  }

Student.prototype.getAverage = function (...marks) {
  if ((this.marks == []) || (this.marks == undefined)) {
    return 0;
  }
  let sum = this.marks.reduce((acc, marks) => acc + marks, 0);
  return avg = sum/this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
}
