// let nums:number[]=[2,3,4]

// let sum:number=0
// for(let i:number=0;i<nums.length;i++){
//     sum+=nums[i]
// }
// console.log(sum)

//演示函数的使用
function getSum(nums: number[]) {
    let sum: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    console.log(sum)
}
let nums: number[] = [1, 3, 5]
getSum(nums)

