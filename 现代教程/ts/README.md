# TypeScript

## 1.2 TypeScript 是什么

- TypeScript (简称：TS) 是 JavaScript 的超集(JS 有的 TS 都有)。
- TypeScript=Type+JavaScript(为 JS 添加了类型系统)。
- TypeScript 是微软开发的开源编程语言，设计目标是开发大型应用。可以在任何浏览器、任何计算机、任何操作系统上运行。

```typescript
//TypeScript 代码：有明确的类型，即：number(数值类型)
let age: number = 18;
//JavaScript 代码：无明确的类型
let age = 18;
```

## 1.3 TypeScript 相比 JS 的优势

- 优势一：类型化思维方式，使得开发更严谨，提前发现错误，减少改 bug 时间。
- 优势二：类型系统提高了代码的可读性，并使维护和重构代码更加容易。
- 优势三：补充了接口、枚举等大型应用时 JS 缺失的功能。

## 2.1 安装解析 TS 的工具包

- 原因

  - Node.js/浏览器，只认识 JS 代码，不认识 TS 代码
  - 需要将 TS 代码转化为 JS，然后就可以在 Node.js/浏览器中运行了。

- 安装步骤：
  - 1.打开 vscode 终端
  - 2.输入安装命令：npm i -g typescript
- typescript:就是用来解析 TS 的工具包，提供了 tsc 命令，实现了 TS->JS 的转化。

## 3.1 第一个 TS 文件

- 步骤

* 1.创建 ts 文件
* 2.写 ts 代码
* 3.执行代码 终端输入命令 tsc+'文件名'
* 4.tsc 命令执行后会生成 js 同名文件，然后使用 node.js 运行

## 3.2 简化执行 TS 的步骤

- 简化方式：使用 ts-node 包，直接在 Node.js 中执行 TS 代码
  - 安装命令：npm i -g ts-node
  - 使用方式：ts-node ts 文件名
- 解释：
  - ts-node 包内部偷偷的将 TS->JS,然后，执行 JS 代码。
  - ts-node 包提供了命令 ts-node,用来执行 TS 代码

# 变量的使用

- 变量的两种使用方式：
  - 1.先声明后赋值
  - 2.声明的同时并赋值（推荐）

```typescript
//1.先声明后赋值
//声明变量并指定类型
let age: number;
//赋值
age = 18;
//2.声明同时赋值（推荐）
let name: string = "黑熊";
```

注意：声明变量的时候要指定变量的类型

## 1.2 类型注解

- 类型注解是一种为变量添加约束类型约束的方式。
- 约定了什么类型，就只能给变量赋什么类型的值。

## 1.3 变量的命名规则

- 变量名称只能出现：数字、字母、下划线（\_）、美元符号($)，并且不能以数字开头。
- 注意变量名称区分大小写。
- 推荐：变量名称要有意义
- 推荐：变量名称使用驼峰命名法（首字母小写，后面每个单词首字母大写）

# 数据类型概述

- TypeScript 中的数据类型分为两大类：1 原始类型（基本数据类型）2 对象类型（复杂数据类型）
- 常用的基本数据类型有 5 个：number/string/boolean/undefind/null

* number 数值类型
* string 字符串类型
* boolean 布尔值类型
* undefind undefind 表示声明但未赋值的变量值（找不到值）
* null null 表示声明了变量并已赋值，值为 null(能找到，值就是 null)

undefind 与 null 只有一个值，值为类型本身

# 补充：TS 的类型推论

在 TS 中，某些没有明确指出类型的地方，类型推论会帮助提供类型。
换句话说：由于类型推论的存在，这些地方，类型注解可以省略不写！
发生类型推论的 2 种常见场景：1 声明变量并初始化时 2 决定函数返回值时。

```typescript
let age=18
function(num1:number,num2:number){
  return num1+num2
}
```

注意：这两种情况下，类型注解可以不写！
推荐：能省略类型注解的地方、就省略(偷懒、充分利用 TS 类型推论的能力提升开发效率)

学习时，培养大家去建立类型思维，出师了就可以去繁就简

# 2.创建数组

创建数组有两种语法形式。

- 语法一(推荐):

```typescript
let names: strng[] = [];
```

[](中括号)表示数组。如果数组中没有内容，就是一个空数组。
数组的类型注解由两部分组成：类型+[]。此处表示字符串类型的数组(只能出现字符串类型)

```typescript
  let names:string[]=['迪丽热巴','古力赞啊'，'马尔扎哈']
```

数组，多个元素之间使用逗号(,)分隔。
数组中的每一项内容称为：元素。

- 语法二(不推荐)：

```typescript
let names: string[] = new Array();
```

功能与[]相同，但是更加繁琐：

```typescript
let names: string[] = [];
```

数组中有数据时：

```typescript
  let names:string[]=new Array('迪丽热巴','古力赞啊'，'马尔扎哈')
  //相当于
  let names:string[]=['迪丽热巴','古力赞啊'，'马尔扎哈']
```

## 添加元素

存值的语法是：数组名称[索引]=新值 根据索引是否存在，有两种功能：1、修改元素 2、添加元素

```typescript
let foods: string[] = ["煎饼", "馒头", "米饭"];
//数组的索引分别为：    0      1     2
// 如果索引存在，就表示修改元素：foods[1]='包子'
// 如果索引不存在，就表示添加元素：foods[3]='油泼面'
console.log(foods); //['煎饼','馒头','米饭','油泼面']
//添加元素的通用写法：数组[数组长度]=数值
```

## 遍历数组

遍历数组，也就是把数组中的所有元素挨个获取一次(比如，计算数组中所有数字的和)

```typescript
  let nums:number[]=[100,200,300]
  //索引分别为：      0     1   2
  //推荐使用for循环遍历数组：
  for(let i:number=0;i<=?;i++){
    console.log(nums[i])
  }
  //注意1：因为数组索引是从0开始的，所以计数器i的默认值为0.
  //注意2：应该根据数组长度来计算，公式为数组长度减一，也就是：nums.length-i(最大索引)
  //优势：不管数组的数量怎么变化，for循环的判断条件不需要改动。
```

总结：遍历数组，也就是把数组中的所有元素挨个获取一次。
问题一：如果要遍历数组使用什么语句？ for 循环语句
问题二：for 循环计数器的默认值是什么？ 默认值为：0
问题三：for 循环的判断条件是什么？ i<nums.length

# 函数

## 函数参数

其他说明

- 根据具体的功能，函数参数可以有多个，参数之间使用逗号分隔

```typescript
function fn(name: string, agr: number) {}
fn("刘老师", 18);
```

- 实参和形参按照顺序一一对应

```typescript
function fn(name: string, age: number) {}
fn("刘老师", 18); //name->'刘老师'，age->18
```

- 实参必须符合形参的类型要求，否则会报错

```typescript
function sing(songNmae: string) {}
sing(18); //报错 参数要求是 string 类型 ，但是实参是 number 类型。
```

## 函数返回值

概述

- 函数返回值的作用：将函数内部计算的结果返回，以便于该结果继续参与其他的计算。
  需求：计算以下两次调用的结果的和。
  getSum([1,2,3])
  getSum([100,200,300])

getSum([1,2,3])+getSum([100,200,300]) //6+600=>606

关键点：拿到函数(getSum)内部计算出来的结果，然后才能进行后续的加法计算。
注意：如果没有指定函数的返回值，那么函数返回的默认类型为 void(空，什么都没有)

基本使用

- 步骤：1 指定返回值类型 2 指定返回值 1.指定返回值类型

```typescript
function fn(): 类型注解 {
  return 返回值;
}
```

- 在声明函数的小括号后面，通过:类型注解 指定。

```typescript
  functon fn():number{
    return 19
  }
```

- 注意：返回值必须符合返回值类型的类型要求，否则会报错~

* 基本使用
  - 1.使用变量接收函数返回值
  ```typescript
  let result: 类型注解 = fn();
  ```
  使用变量接收函数返回值的时候，相当于:直接将返回值赋值给变量
  ```typescript
  let result: number = 10;
  ```
  注意：变量 result 的类型与函数 fn 的返回值类型要一致
  然后，就可以使用这个变量(返回值)，继续进行其他计算了。
  - 2.直接使用函数调用的结果(返回值)，进行其他计算
  ```typescript
  console.log(fn() * 10);
  ```

## 函数的调试

### 1.2 函数的执行过程

示例：

```typescript
function work() {
  console.log("早上9点开始工作");
  play();
  console.log("晚上6点结束工作");
}
function play() {
  console.log("早上9点半开始吃鸡");
  console.log("晚上5点半结束吃鸡");
}
work();
```

结论 1：函数里面，还可以继续调用其他函数
结论 2：函数，按照顺序一行行的执行代码，当遇到调用其他函数时，先完成该函数调用，再继续执行代码。

# 接口

## 对象的类型注解

总结：
TS 中对象是结构化的，在使用对象前，就可以根据需求，提前设计好对象的结构。
对象的结构化(类型注解):建立一种契约，约束对象的结构。

```typescript

```

注意点：类型注解中键值对的值为类型~

## 对象方法的类型注解

问题：如何给对象中的方法，添加类型注解
技巧：鼠标放在变量名称上，vscode 就会给出该变量的类型注解

```typescript
let person: {
  sayHi: () => void;
  sing: (name: string) => void;
  sum: (num1: number, num2: number) => number;
};
```

箭头(=>) 左边小括号中的内容：表示方法的参数类型。
箭头(=>) 右边的内容：表示方法的返回值类型。
方法类型注解的关键点：1 参数 2 返回值

## 接口的使用

直接在对象名称后面写类型注解的坏处：1 代码结构不简洁 2 无法复用类型注解。
接口：为对象的类型注解命名，并为你的代码建立契约来约束对象的结构。
语法：

```typescript
interface IUser {
  name: string;
  age: number;
}
let p1: IUser = {
  name: "jack",
  age: 18,
};
```

interface 表示接口，接口名称约定以 I 开头
推荐:使用接口来作为对象的类型注解。

# 对象

对象是对现实生活中具体事物(特征和行为)的抽象，可以使用对象来描述这些具体的事物。
对象包含：1 属性 2 方法
对象是结构化的，它的类型注解就是从对象的结构属性和方法出发，进行类型约束和检查。
推荐：使用接口来作为对象的类型注解，建立一种契约，约束对象的结构。
TS 中的数据类型分为两大类：1 原始类型(基本数据类型) 2 对象类型(复杂数据类型)
常用的基本数据类型有 5 个：number/string/boolean/undefinf/null
复杂数据类型：object(对象、数组)、function(函数)

## 内置对象

- 数组对象 -forEach
  - forEach 方法遍历数组
  ```typescript
  let songs: string[] = ["五环之歌", "邾国人", "明月几时有"];
  ```
  原来的方式：使用 for 循环遍历数组
  ```typescript
    for(let i:number=0;i<songs.length;i++){
      console.log(`索引为${i},值为${songs[i]}`)
    }
  ```
  使用 forEach:
  ```typescript
    songs.forEach(function(item,index){
      console.log(`索引为${index},值为${item}`)
    })
  ```
  注意：forEach方法的参数是一个函数，这种函数也称为回调函数。
  forEach方法的执行过程，遍历整个数组，为数组的每一项元素，调用一次函数。
  回调函数的两个参数：
  1.item表示数组中的每个元素，相当于songs[i]
  2.index表示索引相当于i
