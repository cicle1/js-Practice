# javaScript 面试基础

## 1.值类型和引用类型

### 1.1.值类型

```javascript
let a = 100;
let b = a;
a = 200;
console.log(b); //100
```

### 1.2.引用类型

```javascript
let a = { age: 20 }; //a存的是一个引用地址
let b = a; //b相当于存了一个引用地址与a是同一个地址
b.age = 21;
console.log(a); //21
```

### 1.3.深入分析

- 内存分为堆和栈
  - 栈在上从上往下存储
  - 堆在下从下往上存储
- 值类型直接存储于内存中的`栈`,占用空间少
- ![](F:\projects\practice\js-demo\值类型存储.png)
- 引用类型存储于内存中的`堆`，占用空间多
- ![](F:\projects\practice\js-demo\堆类型存储.png)

### 1.4.常见值类型

```javascript
    let a=// undefind 如果是 const 声明不赋值会报错
    const s='abc' //string
    const n=100 //number
    const b=true //bollen
    const s=Symbol('s')// symbol
```

### 1.5.常见引用类型

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
    //hasOwnProperty 保证传入的 key 不是原型的属性 而是自己的属性
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

### 4.1.字符串拼接

```javascript
const a = 100 + 10; //110
const b = 100 + "10"; //"10010"
const c = true + "10"; //"true10"
//如果想转化数值可以使用 parseInt
```

### 4.2. ==运算符

- 会帮你做一些隐式的强制类型转换

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

### 4.3.if 语句和逻辑运算符

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

### 4.4.逻辑判断

```javascript
console.log(10 && 0); //0  //10是truly变量继续执行返回0
console.log("" || "abc"); //'abc' //''是falsely变量继续往后执行
console.log(!window.abc); //true //非直接取反
```

## 5.原型和原型链

javascript 本身是基于原型继承的语言

### 5.1.class 类

```javascript
/* 类 */
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`你好我是${this.name},今年${this.age}岁了`);
  }
}

//通过类 new 对象/实例
const xiaohuang = new Student("小黄", 20);
console.log(xiaohuang.name);
console.log(xiaohuang.age);
xiaohuang.sayHi();
```

### 5.2.继承

- extends
- super
- 扩展和重写方法

```javascript
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
console.log(xiaohuang.name);
console.log(xiaohuang.number);
xiaohuang.sayHi();
xiaohuang.eat();

//老师实例
const wang = new Teacher("王", "数学");
console.log(wang.name);
console.log(wang.major);
wang.teach();
wang.eat();
```

### 5.3.类型判断 - instanceof

```javascript
//基于上面的继承
xiaohuang instanceof Student //true
xiaohuang instanceof People //true
xiaohuang instanceof Object //true

[] instanceof Array//true
[] instanceof Object//true

{} instanceof Object//true
```

### 5.4.原型

```javascript
//class 实际上是函数，可见是语法糖
typeof People; //'function'
typeof Student; //'function'

//隐式原型和显示原型
console.log(xiaohuang.__proto__);
console.log(Student.prototype);
console.log(xiaohuang.__proto__ === Student.prototype);
```

### 5.5.原型关系

- 每个 `class` 都有显示原型 `prototype`
- 每个实例都有隐式原型 `__proto__`
- 实例的 `__proto__` 指向对应 `class` 的 `prototype`
- 基于原型的执行规则

  - 获取属性 xiaohuang.name 或执行 xiaohuang.sayHi() 时
  - 先在自身属性和方法找
  - 如果找不到则自动去 **proto** 中查找

### 5.6.原型链

```javascript
console.log(Student.prototype.__proto__);
console.log(People.prototype);
console.log(People.prototype === Student.prototype.__proto__);
```

### 5.7.hasOwnProperty

通过这个方法可以验证是否是自身属性

```javascript
xiaohuang.hasOwnProperty(name); //true
xiaohuang.hasOwnProperty(sayHi); //false
```

### 5.8.instanceof

表象 xxx.instanceof 通过 xxx.的 `__proto__` 找上一级的 `prototype` 找得到就是 true 否则就是 false

### 5.9.题目

- 如何准确判断一个变量是数组 a instanceof Array
- class 的原型本质
  - 原型和原型链的图示
  - 属性和方法的执行规则
- 手写 jquery 插件及可扩展性

```javascript
class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector);
    const length = result.length;
    for (let i = 0; i < length; i++) {
      this[i] = result[i];
    }
    this.length = length;
    this.selector = selector;
  }
  get(index) {
    return this[index];
  }
  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i];
      fn(elem);
    }
  }
  on(type, fn) {
    return this.each((elem) => {
      elem.addEventListener(type, fn, false);
    });
  }
  //扩展很多 DOM API
}

//插件
jQuery.prototype.dialog = function (info) {
  alert(info);
};

// '造轮子'
class myJQuery extends jQuery {
  constructor(selector) {
    super(selector);
  }
  //扩展自己的方法
  addClass(className) {}
  style(data) {}
}

// const $p=new jQuery('p')
// $p.get(1)
// $p.each((elem) => console.log(elem.nodeName))
// $p.on('click',()=>alert('lalal'))
```

## 6.作用域和闭包

### 6.1 作用域

- 全局作用域
- 函数作用域
- 块级作用域( ES6 新增)

### 6.2.自由变量

- 一个变量在当前作用域没有定义，但被使用了
- 向上级作用域，一层一层依次寻找，直到找到为止
- 如果到全局作用域都没找到，则报错 xx is not defind

### 6.3.闭包

所有的自由变量的查找，是在函数定义的地方，向上级作用域查找 不是在执行的地方
作用域应用的特殊情况，有两种表现：

- 函数作为返回值被返回

```javascript
function create() {
  const a = 100;
  return function () {
    console.log(a);
  };
}

const fn = create();
const a = 200;
fn(); //100
```

- 函数作为参数被传递

```javascript
function print(fn) {
  const a = 200;
  fn();
}

const a = 100;
function fn() {
  console.log(a);
}
print(fn); //100
```

### 6.4.this

this 取什么样的值是在函数调用的时候定义的，而不是函数定义的时候

```javascript
function fn1() {
  console.log(this);
}
fn1(); //window

fn1.call({ x: 100 }); //{x:100}

const fn2 = fn1.bind({ x: 100 });
fn2(); //{x:100}

const zhangsan = {
  name: "张三",
  sayHi() {
    //this 即当前对象
    console.log(this);
  },
  wait() {
    setTimeout(function () {
      //this===window
      console.log(this);
    });
  },
};

const zhangsan = {
  name: "张三",
  sayHi() {
    //this 即当前对象
    console.log(this);
  },
  waitAgain() {
    setTimeout(() => {
      //this即当前对象  箭头函数中的this的值取他上级作用域的
      console.log(this);
    });
  },
};

class People {
  constructor(name) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(this);
  }
}
const zhangsan = new People("张三");
zhangsan.sayHi(); //zhangsan 对象
```

- 题目

  - 1.this 的不同应用场景，如何取值
    - 当作普通函数被调用
    - 使用 call、apply、bind
    - 作为对象方法调用
    - 在 class 方法中调用
    - 箭头函数
      - 箭头函数中的 this 的值取他上级作用域的
  - 2.手写 bind 函数

  ```javascript
  Function.prototype.bind1 = function () {
    //将参数解析为数组
    const args = Array.prototype.slice.call(arguments);
    //获取this(取出数组第一项，数组剩余的就是传递的参数)
    const t = args.shift();
    const self = this; //当前函数
    //返回一个函数
    return function () {
      //执行原函数，并返回结果
      return self.apply(t, args);
    };
  };
  ```

  - 3.实际开发中闭包的应用 - 隐藏数据 - 如何做一个简单的 cache 工具
    ```javascript
    //闭包隐藏数据，只提供 API
    function createCache() {
      let data = {}; //闭包中的数据被隐藏不被外界访问
      return {
        set: function (key, val) {
          data[key] = val;
        },
        get: function (key) {
          return data[key];
        },
      };
    }
    const c = createCache();
    c.set("a", 100);
    console.log(c.get("a"));
    ```
  - 4.创建 10 个<a>,点击弹出序号

  ```javascript

  ```
