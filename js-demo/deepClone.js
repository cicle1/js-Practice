/*
 *深拷贝
 */

const obj1 = {
  age: 20,
  name: "黑熊",
  address: {
    city: "上海",
  },
  arr: [0, 1, 2, 3, 4],
};
const obj2 = deepClone(obj1);
obj2.address.city = "河北";
console.log(obj1)
/**
 *
 *深拷贝
 * @param {Object} obj要拷贝的对象
 * @return {*}
 */
function deepClone(obj = {}) {
    console.log(typeof obj)
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
