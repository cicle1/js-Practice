//目标：
//num1=>2
//num2=>33

//变量1：
let num1:number=33
let num2:number=2
//思路：
//1.准备空杯子
let temp:number
//2.把num1放入空杯子
temp=num1 //temp=33
//3.把num2的值放入num1
num1=num2 //num1=2
//4.把temp的值给num2
num2=temp//num2=33

console.log(num1)//2
console.log(num2)//33