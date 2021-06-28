let songs: string[] = ['五环之歌', '邾国人', '明月几时有']

//使用 for 循环遍历数组
for (let i: number = 0; i < songs.length; i++) {
    console.log(`索引为${i},值为${songs[i]}`)
}

//使用 使用 forEach
songs.forEach(function (item, index) {
    console.log(`索引为${index},值为${item}`)
})

//声明函数时的参数，称为形参
function sum(num1:number,num2:number){
    return num1+num2
}

//调用函数时的参数，称为实参
sum(1,3)

//模拟 forEach 方法的声明
function forEach1(callbackfn:(value:string,index:number)=>void){

}

//模拟 forEach 方法的调用：
//此处的函数是实参
forEach1(function(value,index){
    
})