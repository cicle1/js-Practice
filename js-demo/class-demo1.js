/* 类 */
class Student{
 constructor(name,age){
     this.name=name
     this.age=age
 }
 sayHi(){
     console.log(`你好我是${this.name},今年${this.age}岁了`)
 }
}

//通过类 new 对象/实例
const xiaohuang=new Student('小黄',20)
console.log(xiaohuang.name)
console.log(xiaohuang.age)
xiaohuang.sayHi()