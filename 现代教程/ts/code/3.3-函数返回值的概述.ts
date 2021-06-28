function getSum(nums: number[]): number {
    let sum: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum
}
let result: number = getSum([1, 2, 3]) + getSum([10, 20, 30])
console.log(result)