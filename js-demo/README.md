# javaScript 面试基础

## 1.值类型和引用类型

- 值类型

```javascript
let a = 100;
let b = a;
a = 200;
console.log(b); //100
```

- 引用类型

```javascript
let a = { age: 20 }; //a存的是一个引用地址
let b = a; //b相当于存了一个引用地址与a是同一个地址
b.age = 21;
console.log(a); //21
```

- 深入分析

* 内存分为堆和栈
  - 栈在上从上往下存储
  - 堆在下从下往上存储
* 值类型直接存储于内存中的`栈`,占用空间少
* ![](F:\projects\practice\js-demo\值类型存储.png)
* 引用类型存储于内存中的`堆`，占用空间多
* ![](F:\projects\practice\js-demo\堆类型存储.png)

- 常见值类型

```javascript
    let a=// undefind 如果是 const 声明不赋值会报错
    const s='abc' //string
    const n=100 //number
    const b=true //bollen
    const s=Symbol('s')// symbol
```

- 常见引用类型

```javascript
const obj={x:100}
const arr=["a","b","c"]
const n=null//特殊引用类型，指针指向空地址

//特殊引用类型，但不存储数据，所以没有"拷贝、复制函数"这一说
function(){}
```

## 2.typeof 运算符

识别所有值类型
识别函数
判断是否是引用类型(不可再细分)

```javascript
//判断所有值类型
let a;              typeof a//'undefind'
const str='abc'     typeof str//'string'
const n=100         typeof n//'number'
const b=true        typeof b//'boolean'
const s=Symbol('s') typeof s//'symbol'

//能判断函数
typeof console.log //'function'
typeof function(){} //'function'

//能识别引用类型(不能再继续识别)
typeof null //'object'
typeof ['a','b'] //'object'
typeof {x:100}//'object'
```

## 3.深拷贝

```javascript
/**
 *
 *深拷贝
 * @param {Object} obj要拷贝的对象
 * @return 拷贝结果
 */
function deepClone(obj = {}) {
  if (typeof obj !== "object" || obj == null) {
    // obj 是null 或者不是对象和数组,直接返回
    return obj;
  }

  let result;

  if (obj instanceof Array) {
    //利用 instanceof 判断是不是数组
    result = [];
  } else {
    result = {};
  }
  for (const key in obj) {
    //hasOwnProperty 保证传入的 key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      //递归调用
      result[key] = deepClone(obj[key]);
    }
  }

  //返回结果
  return result;
}
```

## 4.变量计算-类型转换

字符串拼接
==运算符
if 语句和逻辑运算符

- 字符串拼接

```javascript
const a = 100 + 10; //110
const b = 100 + "10"; //"10010"
const c = true + "10"; //"true10"
//如果想转化数值可以使用 parseInt
```

- ==运算符
  * 会帮你做一些隐式的强制类型转换

```javascript
100 == "100"; //true
0 == ""; //true
0 == false; //true
fasle == ""; //true
null == undefined; //true
//除了==null 之外，其他一律用 ===，例如：
const obj = { x: 100 };
if (obj == null) {
}
//相当于：
//if(obj.a===null||obj.a===undefind){}
```

- if 语句和逻辑运算符
  - if() 括号内判断的是值是`truly`变量才会进入

```javascript
//truly变量:!!a===true的变量 两次非运算为真
//falsely变量:!!a===false的变量 两次非运算为假

//以下是falsely变量。除此之外都是truly变量
!!0 === false;
!!NAN === false;
!!"" === false;
!!null === false;
!!undefind === false;
!!false === false;
```

- 逻辑判断

```javascript
console.log(10 && 0); //0  //10是truly变量继续执行返回0
console.log("" || "abc"); //'abc' //''是falsely变量继续往后执行
console.log(!window.abc); //true //非直接取反
```
## 5.原型和原型链
javascript本身是基于原型继承的语言
