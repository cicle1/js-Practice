// 父类
class People {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eat something`);
  }
}

//子类
class Student extends People {
  constructor(name, number) {
    super(name); //子类通过 super 传递name给父类
    this.number = number;
  }
  sayHi() {
    console.log(`姓名${this.name}学号${this.number}`);
  }
}

//子类
class Teacher extends People {
  constructor(name, major) {
    super(name); //子类通过 super 传递name给父类
    this.major = major;
  }
  teach() {
    console.log(`${this.name}老师教这个${this.major}课程`);
  }
}

//学生实例
const xiaohuang = new Student("小黄", 20);
// console.log(xiaohuang.name);
// console.log(xiaohuang.number);
// xiaohuang.sayHi();
// xiaohuang.eat();

//老师实例
const wang = new Teacher("王", "数学");
// console.log(wang.name);
// console.log(wang.major);
// wang.teach();
// wang.eat();

//console.log(typeof Student)
// console.log(xiaohuang.__proto__);
// console.log(Student.prototype);
// console.log(xiaohuang.__proto__ === Student.prototype);

console.log(Student.prototype.__proto__);
console.log(People.prototype);
console.log(People.prototype === Student.prototype.__proto__);
