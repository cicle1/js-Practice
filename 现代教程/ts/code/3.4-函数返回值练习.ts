//3.封装函数(getMax) 得到任意两个数中的最大值并返回
function getMax(num1: number, num2: number): number {
    // if (num1 > num2) {
    //     return num1
    // } else {
    //     return num2
    // }
    return num1 > num2 ? num1 : num2
}

console.log(getMax(1, 3))
console.log(getMax(7, 3))
console.log(getMax(6, 3))