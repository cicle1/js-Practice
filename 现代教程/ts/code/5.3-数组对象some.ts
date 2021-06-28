//需求：判断数组中是否包含大于10的数字
let nums:number[]=[1,12,9,8,6]
//使用 forEach:
let has:boolean=false
nums.forEach(function(num){
    console.log(num,'forEach')
    if(num>10){
        has=true
    }
})
//问题：遍历整个数组(循环执行了5次)，无法中间停止，这种情况下效率低。


//some 方法：遍历数组，查找是否有一个满足条件的元素(如果有就可以停止循环)。
//循环特点：根据回调函数的返回值，决定是否停止循环。如果返回true，就停止，返回false,就继续循环。

nums.some(function(num){
    console.log(num,'some')
    if(num>10){
        //说明已经找到满足条件的元素，通过返回 true 来停止后续的循环
        return true
    }
     //说明没有找到满足条件的元素，通过返回 false 来继续后续的循环
    return false
})

//some 方法的返回值：布尔值。如果找到满足条件的元素，结果为true， 否则，为false

//查找是否包含满足条件的元素时使用some 对数组中每个元素都进行相同的处理时，就用forEach，